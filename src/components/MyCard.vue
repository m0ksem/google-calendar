<template>
  <div class="card">
    <div class="row">
      <div class="col col--60">
        <TextArea></TextArea>
      </div>
      <div class="col col--40">
        <div><MyButton>Save</MyButton></div>
        <div class="inst_wrap"><Instructions>fdfdffdfdfdfdfdfd</Instructions></div>
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from "./TextArea.vue";
import MyButton from "./MyButton.vue";
import Instructions from "./Instructions.vue";

export default {
  name: "card",

  components: { TextArea, MyButton, Instructions },
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
  margin: 0 -10px;
}

.col {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  &--60 {
    width: 60%;
  }

  &--40 {
    width: 40%;
  }
}

.inst_wrap {
  width: 100%;
  height: 100%;
  padding-top: 20px;
}
</style>