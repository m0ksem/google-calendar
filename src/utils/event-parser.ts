import { dateGenerator } from './date-generator'

const createNotInQuotesRegex = (target: string) => {
  return new RegExp(`(${target})(?=(?:[^"]|"[^"]*")*$)`, 'g')
}

const normalizeString = (str: string) => {
  // Lowercase all symbols except in quotes.
  let newStr = str.replaceAll(createNotInQuotesRegex('\\w*'), (s) => s.toLowerCase())

  newStr = newStr.replaceAll(createNotInQuotesRegex('today'), dateGenerator.today().toLocaleDateString('ru'))
  newStr = newStr.replaceAll(createNotInQuotesRegex('tomorrow'), dateGenerator.tomorrow().toLocaleDateString('ru'))
  newStr = newStr.replaceAll(createNotInQuotesRegex('monday'), dateGenerator.monday().toLocaleDateString('ru'))
  newStr = newStr.replaceAll(createNotInQuotesRegex('tuesday'), dateGenerator.tuesday().toLocaleDateString('ru'))
  newStr = newStr.replaceAll(createNotInQuotesRegex('wednesday'), dateGenerator.wednesday().toLocaleDateString('ru'))
  newStr = newStr.replaceAll(createNotInQuotesRegex('thursday'), dateGenerator.thursday().toLocaleDateString('ru'))
  newStr = newStr.replaceAll(createNotInQuotesRegex('friday'), dateGenerator.friday().toLocaleDateString('ru'))
  newStr = newStr.replaceAll(createNotInQuotesRegex('saturday'), dateGenerator.saturday().toLocaleDateString('ru'))
  newStr = newStr.replaceAll(createNotInQuotesRegex('sunday'), dateGenerator.sunday().toLocaleDateString('ru'))

  return newStr
}

const parseTitle = (str: string) => {
  const [title] = str.match(/"([\w|\s|[а-я]|[,.])*"/ui) || []

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

const parseDate = (str: string): string => {
  const matchResult = str.match(/(\w*\s)?((\d{1,2})\.(\d{1,2})(?:\.(\d{2,4})){0,1})/)

  if (matchResult) {
    const [wholeString, wordBefore, dateStr] = matchResult

    // Ignore until date, we need event date here
    if (wordBefore.trim() !== 'until') {
      return dateStr
    }    
  }

  return dateGenerator.today().toLocaleDateString('ru')
}

const parseTime = (str: string) => {
  const times = str.match(/\d{1,2}:\d{0,2}/g)
  const date = parseDate(str)

  if (!times) return null

  const start = { dateTime: createDate(date, times[0]) }
  const end = times[1] && { dateTime: createDate(date, times[1]) }

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
  const normStr = normalizeString(str)

  console.log(normStr)

  return { 
    summary: parseTitle(normStr),
    ...parseTime(normStr),
    repeat: parseRepeat(normStr),
    description: parseNote(normStr)
  }
}