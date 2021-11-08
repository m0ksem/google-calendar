<template>
  <FluentBackground>
    <GApiGuard id="app">
      <MyContainer>
        <MyCard>
          dsfsdfsdfd
        </MyCard>
        <!-- <MyButton @click="login">Login</MyButton>
        <MyButton @click="loadEvents">Load</MyButton>
        <MyButton @click="createSimpleEvent">createSimpleEvent</MyButton> -->        
      </MyContainer>
    </GApiGuard>    
  </FluentBackground>
</template>

<script>
import GApiGuard from "./components/GApiGuard.vue"
import { createEvent, listEvents, isSignIn, login } from '@/api/google-calendar'
// import MyButton from "./components/MyButton.vue"
import MyCard from "./components/MyCard.vue"
import FluentBackground from "./components/FluentBackground.vue"
import MyContainer from "./components/MyContainer.vue"

export default {
  name: 'App',

  components: { GApiGuard, MyCard, FluentBackground, MyContainer },

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
@keyframes AnimationName {
  0%{background-position:87% 0%}
  50%{background-position:14% 100%}
  100%{background-position:87% 0%}
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
</style>
