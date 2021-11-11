<template>
  <MyCard>
    <div class="col">
      <h1>Welcome!</h1>

      <p>Please, login</p>

      <div class="footer">
        <MyButton @click="login"> LOGIN </MyButton>
      </div>
    </div>
  </MyCard>
</template>

<script>
import MyButton from "../components/MyButton.vue"
import MyCard from "../components/MyCard.vue"

export default {
  components: { MyButton, MyCard },

  methods: {
    login() {
      this.$emit('login')
    }
  }
}
</script>