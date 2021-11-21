<template>
  <div v-if="isGApiLoaded" class="gapi-guard">
    <slot></slot>
  </div>
  <div v-else-if="error" class="gapi-guard gapi-guard--error">
    {{ error }}
  </div>
  <div v-else class="gapi-guard gapi-guard--loading">
    <slot name="loading">
      Loading GApi
    </slot>
  </div>
</template>

<script>
export default {
  name: 'GApiGuard',

  data() {
    return {
      isGApiLoaded: false,
      error: null
    }
  },

  beforeCreate() {
    this.$gapi.getGapiClient().then(() => { 
      this.isGApiLoaded = true // Comment this for infinite loading
      this.$emit('loaded')
    }).catch((error) => {
      this.error = error
    })
  },
}
</script>

<style lang="scss">
.gapi-guard {
  width: 100%;

  &--loading {
    position: fixed;
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>