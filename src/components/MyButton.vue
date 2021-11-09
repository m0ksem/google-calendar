<template>
  <button><slot></slot></button>  
</template>

<style lang="scss" scoped>
button {
  border-radius: 9px;
  padding: 10px 30px;
  height: 100%;
  background: #995dd1;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: 1px;
  transition: all 0.2s ease-in-out;

  &:hover {
background: #b07fdd;
  }
}
</style>