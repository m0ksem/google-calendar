<template>
  <button :disabled="disabled" v-on:click="OnClick">
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
  background: #995dd1;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: solid 2px;
  border-color: #995dd1;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #b07fdd;
    border: solid 2px;
    border-color: #b07fdd;
  }

  &:disabled {
    background: rgb(214, 213, 213);
    border: solid 2px;
    border-color: rgb(185, 185, 185);
    color: gray;
    cursor: no-drop;
  }
}
</style>