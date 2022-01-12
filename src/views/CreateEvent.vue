<template>
  <MyCard>
    <MyTabs :tabs="[{ name: 'old', text: 'Legacy' }, { name: 'new', text: 'New' }]">
      <template #old>
        <LegacyCreateEvent />
      </template>
      <template #new>
        legacy
      </template>
    </MyTabs>
  </MyCard>
</template>

<script>
import MyCard from "../components/base/MyCard.vue";
import MyTabs from '../components/base/MyTabs.vue'
import LegacyCreateEvent from '../components/createEvent/Legacy.vue'

export default {
  name: "CreateEventView",

  pageSubtitle: 'Create Event',

  components: { MyCard,  MyTabs, LegacyCreateEvent },
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
