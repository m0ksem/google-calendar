<template>
  <div class="fluent-background">
    <slot></slot>

    <canvas></canvas>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.fluent-background {
  position: relative;
  width: 100%;
  height: 100%;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>