<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

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
</style>