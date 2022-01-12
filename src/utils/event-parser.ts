type Time = {
  start: Date,
  end: Date,
}

const parseTitle = (str: string) => {
  const [title] = str.match(/"[\w|\s]*"/g) || []

  if (!title) { return null }

  return title.replaceAll(`"`, '')
}

const parseYear = (str?: string) => {
  if (!str) { return new Date().getFullYear() }

  return str.length === 2 ? 2000 + Number(str) : Number(str)
}

const createDate = (date: string, time: string) => {
  const datesplit = date.split(".");
  const year = parseYear(datesplit[2]);
  const month = datesplit[1];
  const day = datesplit[0];

  const timesplit = time.split(":");
  const hours = timesplit[0];
  const minutes = timesplit[1] || 0;

  return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
}

const parseTime = (str: string) => {
  const times = str.match(/\d{1,2}:\d{0,2}/g)
  const date = str.match(/(\d{1,2})\.(\d{1,2})(?:\.(\d{2,4})){0,1}/g)

  if (!times || !date) return null

  const start = { dateTime: createDate(date[0], times[0]) }
  const end = times[1] && { dateTime: createDate(date[0], times[1]) }

  return {
    start,
    end: end || start,
  }
}

const periods = ["secondly", "minutely", "hourly", "daily", "weekly", "monthly", "yearly"]

const parseRepeat = (str: string) => {
  const startIndex = str.toLowerCase().indexOf('repeat')

  const words = str.slice(startIndex).toLowerCase().split(' ')

  const frequency = words.find((word) => periods.includes(word))

  if (!frequency) { return null }

  const interval = words.find((word) => /^\d+$/.test(word)) // Check for number only

  const until = words.find((word) => /(\d{1,2})\.(\d{1,2})(?:\.(\d{2,4})){0,1}/.test(word))

  return {
    frequency: frequency.toUpperCase(),
    interval,
    until: until && createDate(until, '00:00')
  }
}

const parseNote = (str: string) => {
  const { 2: note } = str.match(/(note|description) ("(\w|\s)*")/) || []

  if (!note) { return null }

  return note.replaceAll('"', '')
}

/** TODO: Rename to parse line */
export const parseEvent = (str: string) => {
  return { 
    summary: parseTitle(str),
    ...parseTime(str),
    repeat: parseRepeat(str),
    description: parseNote(str)
  }
}