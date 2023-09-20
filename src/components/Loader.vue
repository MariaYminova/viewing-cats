<template>
  <div class="loader loader__wave"></div>
</template>

<script>
  export default {
    name: 'Loader'
  }
</script>

<style lang="scss">
  $spCol: rgba(95, 120, 123, 1);

  .loader {
    width: 100px;
    height: 100px;
    clear: both;
    margin: 20px auto;

    &__wave {
      border-radius: 50%;
      position: relative;
      opacity: 1;

      &:before,
      &:after {
        content: '';
        border: 1px $spCol solid;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
      }

      &:before {
        transform: scale(1, 1);
        opacity: 1;
        -webkit-animation: spWaveBe 0.6s infinite linear;
        animation: spWaveBe 0.6s infinite linear;
      }

      &:after {
        transform: scale(0, 0);
        opacity: 0;
        -webkit-animation: spWaveAf 0.6s infinite linear;
        animation: spWaveAf 0.6s infinite linear;
      }
    }
    @keyframes spWaveAf {
      from {
        transform: scale(0.5, 0.5);
        opacity: 0;
      }
      to {
        transform: scale(1, 1);
        opacity: 1;
      }
    }

    @-webkit-keyframes spWaveBe {
      from {
        -webkit-transform: scale(1, 1);
        opacity: 1;
      }
      to {
        -webkit-transform: scale(1.5, 1.5);
        opacity: 0;
      }
    }

    @keyframes spWaveBe {
      from {
        -webkit-transform: scale(1, 1);
        opacity: 1;
      }
      to {
        -webkit-transform: scale(1.5, 1.5);
        opacity: 0;
      }
    }
  }
</style>
