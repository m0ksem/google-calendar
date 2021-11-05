export interface GoogleCalendarEventRepeat {
  frequency: 'SECONDLY' | 'MINUTELY' | 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY',
  count: number
}

export interface GoogleCalendarEventPeriod {
    /** Date in ISO format */
    dateTime: Date;
    timeZone?: string;
}

export interface GoogleCalendarEventReminder {
  method: 'email' | 'popup'
  minutes: number
}

export interface GoogleCalendarEvent {
  summary: string;
  description?: string;
  location?: string;
  start: GoogleCalendarEventPeriod,
  end: GoogleCalendarEventPeriod,
  repeat?: GoogleCalendarEventRepeat[] | GoogleCalendarEventRepeat

  reminders?: GoogleCalendarEventReminder[]
}