<template>
    <div class="instructions">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.instructions {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0px;
    border: 0px;
    border-radius: 0px 10px 10px 0px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.6);
    overflow-y: auto;
    color: #292929;

    code {
        font-family: 'Consolas', 'Times New Roman';
        color: #252525;
    }
}
</style>