<template>
  <div class="row">
    <div class="col col--60">
      <TextArea v-model="textareaValue"></TextArea>
    </div>
    <div class="col col--40">
      <div>
        <MyButton :disabled="IsDisabled" v-on:click="ButtonClick">
          Create events
        </MyButton>
        <MyButton v-on:click="Logout" color="#543c6b">Log out</MyButton>
      </div>
      <MyOptionsList
        v-model="currentCalendar"
        :options="options"
        textKey="summary"
        placeholder="Select a calendar"
      ></MyOptionsList>
      <div class="instructions-wrapper">
        <Instructions>
          <VueMarkdown :source="instruction"></VueMarkdown>
        </Instructions>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown-render'
import TextArea from "../../components/base/MyTextArea.vue";
import MyButton from "../../components/base/MyButton.vue";
import MyOptionsList from "../../components/base/MyOptionsList.vue";
import Instructions from "../../components/Instructions.vue";
import { getPrettyCalendarList, createEvent } from "../../api/google-calendar";
import InstructionsMD from '../../assets/instruction.md'

export default {
  name: "CreateEventView",

  pageSubtitle: 'Create Event - Legacy',

  components: { TextArea, MyButton, MyOptionsList, Instructions, VueMarkdown },

  data() {
    return {
      textareaValue: ``,

      currentCalendar: null,

      options: [],
    };
  },

  beforeCreate() {
    this.instruction = InstructionsMD
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
    parseDate(date) {
      const datesplit = date.split(".");
      const year = datesplit[2];
      const month = datesplit[1];
      const day = datesplit[0];

      return new Date(year, month - 1, day + 1)
    },

    parseDateRow(text) {
      const [time, date] = text.split(" ");

      const [start, end] = time.split("-")

      return {
        start,
        end: end || start,
        date: date || new Date().toLocaleDateString('ru-RU')
      }
    },

    createDate(date, time) {
      const datesplit = date.split(".");
      const year = datesplit[2];
      const month = datesplit[1];
      const day = datesplit[0];

      const timesplit = time.split(":");
      const hours = timesplit[0];
      const minutes = timesplit[1];

      return new Date(year, month - 1, day, hours, minutes);
    },

    createRepeat(text) {
      const r = text.replace("repeat: ", "");
      const [frequency, count, until] = r.split(" ");

      if (until) {
        return { 
          frequency: frequency.toUpperCase(), 
          interval: count || 1,
          until: this.parseDate(until)
        };
      }

      return { frequency: frequency.toUpperCase(), count: count || 1 };
    },

    // createReminder(text) {
    //   // const t = text.replace("reminder: ", "");

    //   // const letterMap = {
    //   //   s: 1/60,
    //   //   m: 1,
    //   //   h: 60,
    //   //   d: 60 * 24,
    //   //   w: 60 * 24 * 7,
    //   // }


    // },

    createEvents() {
      const eventTexts = this.textareaValue.split('\n\n\n')

      const events = eventTexts.map((text) => this.createEvent(text))

      return events
    },

    createEvent(text) {
      const rows = text.split("\n");

      if (!rows[0]) { throw new Error('Event name required') }
      if (!rows[1]) { throw new Error('Event date required') }

      const { start, end, date } = this.parseDateRow(rows[1])

      const event = {
        summary: rows[0],
        start: {
          dateTime: this.createDate(date, start),
        },
        end: {
          dateTime: this.createDate(date, end),
        },
        description: rows[2] ? rows[2] : undefined,
        repeat: rows[3] ? this.createRepeat(rows[3]) : undefined,
      };

      return event;
    },

    async ButtonClick() {
      const events = this.createEvents()

      const r = await Promise.all(events.map(async (e) => {
        return createEvent(e, this.currentCalendar)
      }))

      this.$toast.open('Events created!')

      console.log(r);
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
  overflow-y: auto;
}

.my-button {
  margin: 0 6px;
}
</style>
