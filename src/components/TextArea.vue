<template>
    <textarea :value="value" v-on:input="OnInput"></textarea>
    <!-- <button v-on:click="createEvent" :disabled="isDisabled">Find words</button> -->
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    }
  },

  methods: {
    // findWords() {
    //   const wordsarr = this.value.split(" ");
    //   for (let i = 0; i < wordsarr.length; i++) {
    //     console.log(wordsarr[i]);
    //   }
    // },

    createEvent() {
        const rows = this.value.split("\n");
        const event = {
            title: rows[0],
            time: rows[1],
            description: rows[2],
            repeat: rows[3],
            remind: rows[4]
        }
        console.log(event)
    },

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