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
        <MyOptionsList v-model="currentCalendar" :options="options" textKey="summary"></MyOptionsList>
        <div class="instructions-wrapper">
          <Instructions></Instructions>
        </div>
      </div>
    </div>
  </MyCard>
</template>

<script>
import MyCard from "../components/base/MyCard.vue";
import TextArea from "../components/base/MyTextArea.vue";
import MyButton from "../components/base/MyButton.vue";
import MyOptionsList from "../components/base/MyOptionsList.vue";
import Instructions from "../components/Instructions.vue";
import { getPrettyCalendarList } from "../api/google-calendar";

export default {
  name: "CreateEventView",

  components: { TextArea, MyButton, MyOptionsList, MyCard, Instructions },

  data() {
    return {
      textareaValue: `Пара групповой динамики
1:30 - 12:45 13.10.2021
Ссылка на пару http://aaaaaaad.sf
repeat: Weekly`,

      currentCalendar: null,

      options: [],
    };
  },

  async mounted() {
    this.options = await getPrettyCalendarList();
  },

  computed: {
    IsDisabled() {
      return this.textareaValue == "";
    },
  },

  methods: {
    createDate(date, time) {
      const datesplit = date.split(".");
      const year = datesplit[2];
      const month = datesplit[1];
      const day = datesplit[0];

      const timesplit = time.split(":");
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
          dateTime: this.createDate(date, startTime),
        },
        end: {
          dateTime: this.createDate(date, endTime),
        },
        description: rows[2],
        repeat: this.createRepeat(rows[3]),
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

    createRepeat(text) {
      const r = text.replace('repeat: ', '');
      const spltRepeat = r.split(" ");
      if(spltRepeat[1] != undefined) {
       return {frequency: spltRepeat[0], count: spltRepeat[1]}
      }
      return {frequency: spltRepeat[0], count: 1}
    }
  },
};
</script>

<style lang="scss" scoped>
.instructions-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 20px;
}

.my-button {
  margin: 0 6px;
}
</style>