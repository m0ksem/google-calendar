<template>
  <div v-if="isGApiLoaded" class="gapi-guard">
    <slot></slot>
  </div>
  <div v-else class="gapi-guard gapi-guard--loading">
    Loading GApi
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      isGApiLoaded: false,
    }
  },

  beforeCreate() {
    this.$gapi.getGapiClient().then(() => { this.isGApiLoaded = true })
  },
}
</script>

<style lang="scss">
.gapi-guard {
  width: 100%;

  &--loading {
    position: fixed;
    height: 100vh;
    width: 100vh;
  }
}
</style>