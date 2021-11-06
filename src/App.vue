<template>
  <GApiGuard id="app">
    <button @click="login">Login</button>
    <button @click="loadEvents">Load</button>
    <button @click="createSimpleEvent">createSimpleEvent</button>
  </GApiGuard>
</template>

<script>
import GApiGuard from "./components/GApiGuard.vue"
import { createEvent, listEvents, isSignIn, login } from '@/api/google-calendar'

export default {
  name: 'App',

  components: { GApiGuard },

  methods: {
    async login() {
      if (isSignIn()) {
        return
      }

      console.log(await login())
    },

    async loadEvents() {
      console.log(await listEvents())
    },

    async createSimpleEvent() {
      createEvent({
        summary: 'Hello world!',
        start: { dateTime: new Date() },
        end: { dateTime: new Date() },
        repeat: {
          frequency: 'WEEKLY',
          count: 21
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
