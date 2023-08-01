<template>
  <div class="page-header">
    <img src="@/assets/icon/icon-logo.svg" alt="" />
    <div class="page-header__line"></div>
  </div>
</template>

<script></script>

<style lang="scss">
  .page-header {
    display: flex;
    justify-content: center;
    margin: 40px 0 100px 0;
    position: relative;

    &__line {
      height: 2px;
      width: 100%;
      background-color: rgba(95, 120, 123, 1);
      position: absolute;
      top: 51px;
      z-index: -1;
    }
  }
</style>
