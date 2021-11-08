<template>
  <div class="card">
    <div class="row">
      <div class="col col--70">
        <TextArea></TextArea>
      </div>
      <div class="col col--30"></div>
    </div>
  </div>
</template>

<script>
import TextArea from "./TextArea.vue";

export default {
  name: "card",

  components: { TextArea },
};
</script>


<style lang="scss" scoped>
.card {
  height: 90vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 40px 0px;
  border-radius: 20px;
  box-shadow: 5px 5px 12px -9px rgba(0, 0, 0, 0.67);
  padding: 20px;
  box-sizing: border-box;
}

.row {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.col {
  width: 100%;
  height: 100%;

  &--70 {
    width: 70%;
  }

  &--30 {
    width: 30%;
  }
}
</style>