<template>
  <FluentBackground>
    <GApiGuard @loaded="onGApiLoaded">
      <MyContainer>        
        <CreateEventView v-if="isSignedIn" @signout="signOut" />
        <LoginView v-else @login="login" />
      </MyContainer>

      <template #loading>
        <MyLoader />
      </template>
    </GApiGuard>    
  </FluentBackground>
</template>

<script>
import Vue from 'vue'
import GApiGuard from "./components/GApiGuard.vue"
import { createEvent, listEvents, isSignIn, login, signOut } from '@/api/google-calendar'
import FluentBackground from "./components/FluentBackground.vue"
import MyContainer from "./components/base/MyContainer.vue"
import MyLoader from "./components/base/MyLoader.vue"

import LoginView from './views/Login.vue'
import CreateEventView from "./views/CreateEvent.vue"

export default {
  name: 'App',

  components: { GApiGuard, FluentBackground, MyContainer, MyLoader, LoginView, CreateEventView, },

  data() {
    return {
      isSignedIn: false,
    }
  },

  mounted() {
    window.onerror = this.onError
    window.onunhandledrejection = this.onError

    Vue.config.warnHandler = this.onError
    Vue.config.errorHandler = this.onError
  },

  methods: {
    async onGApiLoaded() {
      this.isSignedIn = await isSignIn()
    },

    async login() {
      if (await isSignIn()) {
        return
      }

     await login()

      this.isSignedIn = await isSignIn()
    },

    async signOut() {
      if (!(await isSignIn())) {
        return 
      }

      await signOut()

      this.isSignedIn = await isSignIn()
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
    },

    onError(e) {
      this.$toast.open({
          message: 'Something went wrong! Look into console to get more information.',
          type: 'error',
      });
      console.error(e)
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

@keyframes AnimationName {
  0%{background-position:87% 0%}
  50%{background-position:14% 100%}
  100%{background-position:87% 0%}
}

* {
  font-family: 'Rubik', sans-serif;
}

body {
  height: 100vh;
  background: linear-gradient(213deg, #f7d1cd, #e8c2ca, #d1b3c4, #b392ac, #735d78);
  background-size: 1000% 1000%;
  animation: AnimationName 59s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0px;
}

.row {
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0 -10px;
}

.col {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  &--60 {
    width: 60%;
  }

  &--40 {
    width: 40%;
  }
}
</style>
