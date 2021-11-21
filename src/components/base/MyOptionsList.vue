<template>
  <div class="select">
    <select @change="onChange">
      <option
        v-for="o in options"
        :key="o[textKey]"
        :selected="o[valueKey] == value"
        :value="o[valueKey]"
      >
        {{ o[textKey] }}
      </option>
      <option selected hidden disabled></option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },

    value: {},

    textKey: { 
        type: String, 
        default: "text" 
    },

    valueKey: { 
        type: String, 
        default: "id" 
    },
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  margin: 0px;
  box-sizing: border-box;
}
select {
  width: 100%;
  margin: 0px;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 6px;
}
</style>