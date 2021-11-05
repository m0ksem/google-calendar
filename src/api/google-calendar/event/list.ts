export const listEvents = async () => {
  const response = await gapi.client.calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime'
  })

  console.log()

  return JSON.parse(response.body)
}