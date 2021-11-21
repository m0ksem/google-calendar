<template>
  <MyCard>
    <div class="row">
      <div class="col col--60">
        <TextArea v-model="textareaValue"></TextArea>
      </div>
      <div class="col col--40">
        <div>
          <MyButton :disabled="IsDisabled" v-on:click="ButtonClick"
            >Save</MyButton
          >
          <MyButton v-on:click="Logout">Log out</MyButton>
        </div>
        <div class="instructions-wrapper">
          <Instructions>fdfdffdfdfdfdfdfd</Instructions>
        </div>
      </div>
    </div>
  </MyCard>
</template>

<script>
import MyCard from "../components/base/MyCard.vue";
import TextArea from "../components/base/MyTextArea.vue";
import MyButton from "../components/base/MyButton.vue";
import Instructions from "../components/Instructions.vue";
import { getPrettyCalendarList } from '../api/google-calendar'

export default {
  name: "CreateEventView",

  components: { TextArea, MyButton, Instructions, MyCard },

  data() {
    return {
      textareaValue: `Пара групповой динамики
11:30 - 12:45 13.10.2021
Ссылка на пару http://aaaaaaad.sf
repeat: Weekly`,
    };
  },

  async mounted() {
    console.log(await getPrettyCalendarList())
  },

  computed: {
    IsDisabled() {
      return this.textareaValue == "";
    },
  },

  methods: {
    createDate(date, time) {
      const datesplit = date.split(".")
      const year = datesplit[2];
      const month = datesplit[1];
      const day = datesplit[0];

      const timesplit = time.split(":")
      const hours = timesplit[0];
      const minutes = timesplit[1];

      return new Date(year, month, day, hours, minutes);
    },

    createEvent() {
      const rows = this.textareaValue.split("\n");

      const timeanddate = rows[1].split(" ");
      const startTime = timeanddate[0];
      let endTime = timeanddate[2];
      let date = timeanddate[3];

      if (endTime == undefined) {
        endTime = startTime;
        date = timeanddate[1];
      }

      const event = {
        summary: rows[0],
        start: {
          dateTime: this.createDate(date, startTime)
        },
        end: {
         dateTime: this.createDate(date, endTime)
        },
        description: rows[2],
        repeat: rows[3],
        reminders: rows[4],
      };

      return event;
    },
    ButtonClick() {
      console.log(this.createEvent());
    },
    Logout() {
      this.$emit("signout");
    },
  },
};
</script>

<style lang="scss" scoped>
.instructions-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 20px;
}
</style>