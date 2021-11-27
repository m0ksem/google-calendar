<template>
  <MyCard>
    <div class="col">
      <h1>Welcome!</h1>

      <p>This app allows you to create Google Calendar events using only keyboard.</p>

      <div class="footer">
        <MyButton @click="login" color="#4285f4"> Login with Google </MyButton>
      </div>
    </div>
  </MyCard>
</template>

<script>
import MyButton from "../components/base/MyButton.vue"
import MyCard from "../components/base/MyCard.vue"

export default {
  name: 'LoginView',

  pageSubtitle: 'Login',

  components: { MyButton, MyCard },

  methods: {
    login() {
      this.$emit('login')
    }
  }
}
</script>