<template>
  <button :disabled="disabled" v-on:click="OnClick" class="my-button" :style="{ background: color, 'border-color': color }">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    color: { 
      type: String,
      default: "#995dd1"
    }
  },

  methods: {
    OnClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 9px;
  padding: 10px 30px;
  height: 100%;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: solid 2px;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    border: solid 2px;
  }

  &:disabled {
    background: rgb(214, 213, 213) !important;
    border: solid 2px;
    border-color: rgb(185, 185, 185) !important;
    color: gray;
    cursor: no-drop;
  }
}
</style>