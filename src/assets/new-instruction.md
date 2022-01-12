# Instruction

Select calendar above

## Usage

Simply write title in quotes, time and date. For example:
```
"Go to shop" 12:40 24.01.22
```

### Repeat
- Repeat weekly
```
"Go to shop" 12:40 24.1.22 repeat weekly
```

- Repeat until some date
```
"Go to shop" 12:40 24.1.22 repeat weekly until 24.12.22
```

- Repeat each second week
```
"Go to shop" 12:40 24.1.22 repeat weekly 2
```


### Description
- Event description can be written with "note" or "description" keyword followed by string.
```
"Go to shop" 12:40 24.1.22 note "By milk"
```

```
"Go to shop" 12:40 24.1.22 description "By milk"
```

### Formats
Allowed time formats: `hh:mm`, `h:mm`, `hh:`

Allowed time period: `hh:mm - hh:mm`, `hh:mm-hh:mm`, `hh:mm hh:mm`

Allowed date formats: `dd.mm.yy`, `dd.mm.yyyy`, `dd.mm`