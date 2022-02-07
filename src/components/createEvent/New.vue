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
import TextArea from "../base/MyTextArea.vue";
import MyButton from "../base/MyButton.vue";
import MyOptionsList from "../base/MyOptionsList.vue";
import Instructions from "../Instructions.vue";
import { getPrettyCalendarList, createEvent } from "../../api/google-calendar";
import InstructionsMD from '../../assets/new-instruction.md'
import { parseEvent } from '../../utils/event-parser'

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
    createEvents() {
      const eventTexts = this.textareaValue.split('\n')

      const events = eventTexts.map((text) => this.createEvent(text))

      return events
    },

    createEvent(text) {
      return parseEvent(text)    
    },

    async ButtonClick() {
      const events = this.createEvents()

      console.log(events)

      const r = await Promise.all(events.map(async (e) => {
        return createEvent(e, this.currentCalendar)
      }))

      this.$toast.open('Events created!')

      console.log(r)
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
