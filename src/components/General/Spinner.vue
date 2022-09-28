<script setup>
defineProps({
  fullScreen: {
    type: Boolean,
    default: true
  }
})
</script>

<template lang="pug">
.spinner(:class="{ 'full-screen': fullScreen }")
  span.loader
</template>

<style lang="scss" scoped>
.spinner {
  &.full-screen {
    @apply fixed inset-0 flex items-center justify-center bg-white z-50;
  }
}

.loader {
  box-sizing: border-box;
  position: relative;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;

  &:after {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    border-radius: 50%;
    background: #00944F;
    animation: spin 1s linear infinite;
    transform-origin: 0px 100%;
  }

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    border-radius: 50%;
    background: #00944F;
    animation: spin 1s linear infinite;
    transform-origin: 0px 100%;
    transform-origin: 0 50%;
    background: #005353;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>