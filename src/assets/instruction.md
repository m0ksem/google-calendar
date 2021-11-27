# Instruction

Select calendar above

Write your calendar events in text area in following format and separate them using two line breaks:
- TITLE
- TIME[-TIME] DATE - second time is optional
- DESCRIPTION
- repeat: PERIOD INTERVAL UNTIL_DATE

-----

- TITLE - any string
- TIME - time string in following format: hh:mm
- [-TIME] - optional time string with "-" symbol before
- DATE - date string in following format: dd.mm.yyyy
- DESCRIPTION - any valid string, can be empty
- PERIOD - one of 'SECONDLY', 'MINUTELY', 'HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'
- INTERVAL - interval of PERIOD
- UNTIL_DATE - date string until event will be repeated
-----

## Example
Lets prepare for your Grandma birthday

```
Grandma birthday
00:00-23:59 29.10.1923
Don't forget to make a present.
repeat: YEARLY 1


Go to shop and buy some food
19:00 28.10.2021
Buy list: Milk, Cake and Meet


Check if favorite TV is available on market
9:00-15:00 13.10.2021
https://example.com/favorite-tv
repeat: Daily 1 25.10.2021


Bus to Grandma
10:00 28.10.2021
Ticket for 221 bus on South Bus Station
```