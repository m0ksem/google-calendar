<template>
  <div id="app">
    <button @click="login">Login</button>
    <button @click="loadEvents">Load</button>
    <button @click="createSimpleEvent">createSimpleEvent</button>
  </div>
</template>

<script>
export default {
  name: 'App',

  beforeCreate() {
    this.$gapi.getGapiClient()
  },

  methods: {
    async login() {
      await this.$gapi.login()
    },

    async loadEvents() {
      const client = (await this.$gapi.getGapiClient()).client

      const response = await client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime'
      })

      console.log(JSON.parse(response.body))
    },

    async createSimpleEvent() {
      const client = (await this.$gapi.getGapiClient()).client

      await client.calendar.events.insert({
        calendarId: 'primary',
        resource: {
          'summary': 'Test',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'A chance to hear more about Google\'s developer products.',
          'start': {
            'dateTime': new Date().toISOString(),
            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
          },
          'end': {
            'dateTime': new Date().toISOString(),
            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
