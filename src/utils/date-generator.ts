const getNextWeekDay = (index: number) => {
  const date = new Date()
  const currentWeekDay = date.getDay()
  const currentDay = date.getDate()
  let difference = index - currentWeekDay

  if (difference <= 0) { difference += 7 }

  date.setDate(currentDay + difference)

  return date
}

export const dateGenerator = {
  tomorrow: () => {
    const date = new Date()
    date.setDate(date.getDate() + 1)
    return date
  },

  today: () => new Date(),
  sunday: () => getNextWeekDay(0),
  monday: () => getNextWeekDay(1),
  tuesday: () => getNextWeekDay(2),
  wednesday: () => getNextWeekDay(3),
  thursday: () => getNextWeekDay(4),
  friday: () => getNextWeekDay(5),
  saturday: () => getNextWeekDay(6),
}