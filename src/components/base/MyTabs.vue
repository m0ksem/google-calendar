<template>
  <div class="my-tabs">
    <div class="my-tabs__tabs">
      <div 
        class="my-tabs__tab" 
        v-for="(tab, index) in computedTabs" 
        :key="tab[textKey]"
        :class="{ 'my-tabs__tab--active ': index === innerValue }"
        @click="onTabClick(index)"
      >
        {{ tab[textKey] }}
      </div>
    </div>
    <div class="my-tabs__tab-content">
      <slot :name="activeTab[nameKey]"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /** Active tab index */
    value: { type: Number, default: undefined, },
    tabs: { type: Array, default: () => [] },
    textKey: { type: String, default: 'text' },
    nameKey: { type: String, default: 'name' }
  },

  data() {
    return {
      innerValue: 0,
    }
  },

  computed: {
    computedTabs() {
      const createTab = (tab) => ({ [this.textKey]: tab, [this.nameKey]: tab })

      return this.tabs.map((tab) => typeof tab === 'string' ? createTab(tab) : tab) 
    },
    activeTab() {
      return this.tabs[this.innerValue]
    }
  },

  methods: {
    onTabClick(tabIndex) {
      this.$emit('input', tabIndex) 
      this.innerValue = tabIndex
    }
  },

  watch: {
    value: {
      handler(newValue) { this.innerValue = newValue; },
      immediate: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.my-tabs {
  $tabs-height: 40px;

  height: 100%;
  display: flex;
  flex-direction: column;

  &__tabs {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: $tabs-height;
  }

  &__tab {
    $color: rgba(255, 255, 255, 0.5);
    $active-color: white;

    cursor: pointer;
    margin-right: 8px;
    margin-left: 8px;
    border: 1px solid $color;
    padding: 4px;
    width: 100%;
    color: $color;
    text-align: center;

    &:last-child {
      margin-right: 0;
    }

    &:first-child {
      margin-left: 0;
    }

    &--active {
      color: $active-color;
      border-color: $active-color;
    }
  }

  &__tab-content {
    height: calc(100% - $tabs-height);
  }
}
</style>