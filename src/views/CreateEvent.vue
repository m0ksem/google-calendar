<template>
  <MyCard>
    <MyTabs v-model="activeTab" :tabs="[{ name: 'old', text: 'Legacy' }, { name: 'new', text: 'New' }]">
      <template #old>
        <LegacyCreateEvent />
      </template>
      <template #new>
        <NewCreateEvent />
      </template>
    </MyTabs>
  </MyCard>
</template>

<script>
import MyCard from "../components/base/MyCard.vue";
import MyTabs from '../components/base/MyTabs.vue'
import LegacyCreateEvent from '../components/createEvent/Legacy.vue'
import NewCreateEvent from '../components/createEvent/New.vue'

export default {
  name: "CreateEventView",

  pageSubtitle: 'Create Event',

  components: { MyCard,  MyTabs, LegacyCreateEvent, NewCreateEvent },

  data() {
    return { activeTab: 1, }
  }
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
