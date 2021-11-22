import { GoogleCalendarEvent, GoogleCalendarEventPeriod, GoogleCalendarEventReminder, GoogleCalendarEventRepeat } from './event'

const normalizePeriod = (period: GoogleCalendarEventPeriod) => {
  const timeZone = period.timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dateTime = typeof period.dateTime === 'number' ? period.dateTime : period.dateTime.toISOString()  

  return {
    dateTime,
    timeZone,
  }
}

const safeArray = <T>(o: T | T[]): T[] => Array.isArray(o) ? o : [o]

const normalizeRepeat = (repeat: GoogleCalendarEventRepeat | GoogleCalendarEventRepeat[]) => {
  return safeArray(repeat)
    .map((rule) => {
      const rules = [
        `FREQ=${rule.frequency}`, 
        `INTERVAL=${rule.interval || 1}`
      ]

      if (rule.until) {
        rules.push(`UNTIL=${rule.until.toISOString().slice(0,10).replace(/-/g,"")}`)
      }

      return `RRULE:${rules.join(';')}`
    })
}

const normalizeReminders = (reminders: GoogleCalendarEventReminder[] | undefined) => {
  if (!reminders) { 
    return undefined
  }

  return {
    useDefault: false,
    overrides: reminders
  }
}

export const createEvent =  async (event: GoogleCalendarEvent, calendarId: string = 'primary'): Promise<any> => {
  const normalizedEvent: gapi.client.calendar.EventInput = {
    ...event,
    start: normalizePeriod(event.start),
    end: normalizePeriod(event.end),
    recurrence: normalizeRepeat(event.repeat || []),
    reminders: normalizeReminders(event.reminders)
  }

  return await gapi.client.calendar.events.insert({
    calendarId,
    resource: normalizedEvent 
  })
}