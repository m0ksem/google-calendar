<template>
    <textarea :value="value" v-on:input="OnInput" />
</template>

<script>
export default {
  name: 'MyTextArea',

  props: {
    value: { type: String },
  },

  methods: {
    OnInput(e) {
      this.$emit('input', e.target.value)
    }
  },
};
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0px;
  border: 0px;
  border-radius: 10px 0px 0px 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8);

  &:focus {
    outline: solid 2px;
    outline-color: #998feb;
  }
}
</style>