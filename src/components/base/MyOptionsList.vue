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
    
    <div class="select__arrow">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
    </div>

    <div v-if="!value" class="select__placeholder">
      {{ placeholder }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },

    placeholder: { type: String, default: 'Select...' },

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
  position: relative;
  margin-top: 20px;

  &__arrow {
    position: absolute;
    height: 12px;
    width: 12px;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(0, 0, 0, 0.8);
  }

  &__placeholder {
    position: absolute;
    top: 50%;
    left: 16px;
    color: rgba(0, 0, 0, 0.5);
    transform: translateY(-50%);
    user-select: none;
    pointer-events: none;
  }
}
select {
  width: 100%;
  margin: 0px;
  box-sizing: border-box;
  padding: 12px 16px;
  padding-right: 32px;
  border: 0;
  background: rgba(255, 255, 255, 0.6);
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
}

option {
  padding: 12px 16px;
}
</style>