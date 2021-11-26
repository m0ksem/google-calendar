# Instruction

Select calendar above

Write your calendar events in text area in following format:
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
```
Grandma birthday
00:00-23:59 29.10.1923
Don't forget to make a present.
repeat: YEARLY 1
```
