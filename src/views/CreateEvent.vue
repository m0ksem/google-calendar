<template>
  <MyCard>
    <div class="row">
      <div class="col col--60">
        <TextArea v-model="textareaValue"></TextArea>
      </div>
      <div class="col col--40">
        <div>
          <MyButton :disabled="IsDisabled" v-on:click="ButtonClick">Save</MyButton>
          <MyButton v-on:click="Logout">Log out</MyButton>
        </div>
        <div class="inst_wrap">
          <Instructions>fdfdffdfdfdfdfdfd</Instructions>
        </div>
      </div>
    </div>
  </MyCard>
</template>

<script>
import MyCard from "../components/MyCard.vue"
import TextArea from "../components/TextArea.vue";
import MyButton from "../components/MyButton.vue";
import Instructions from "../components/Instructions.vue";

export default {
  name: "card",

  components: { TextArea, MyButton, Instructions, MyCard },

  data() {
    return {
      textareaValue: "",
    };
  },

  computed: {
    IsDisabled() {
      return this.textareaValue == "";
    },
  },

  methods: {
    createEvent() {
      const rows = this.textareaValue.split("\n");
      const event = {
        title: rows[0],
        time: rows[1],
        description: rows[2],
        repeat: rows[3],
        remind: rows[4],
      };
      return event;
    },
    ButtonClick() {
      console.log(this.createEvent());
    },
    Logout() {
      this.$emit('signout');
    }
  },
};
</script>

<style lang="scss" scoped>
.inst_wrap {
  width: 100%;
  height: 100%;
  padding-top: 20px;
}
</style>