export const getCalendarList = async () => {
  return await gapi.client.calendar.calendarList.list({})
}

export const getPrettyCalendarList = async () => {
  return (await gapi.client.calendar.calendarList.list())
    .result.items.map((item) => ({
      summary: item.summary,
      id: item.id,
      description: item.description
    }))
}