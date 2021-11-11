<template>
  <div class="square square--animated">
    Loading
  </div>
</template>

<style lang="scss" scoped>
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .square {
    height: 100px;
    width: 100px;

    border: 4px solid red;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    &--animated {
      animation: rotate infinite 2s ease-in-out;
    }
  }
</style>