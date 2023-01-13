<script setup>
defineProps({
  title: {
    type: String,
    default: 'Empathize',
  },
  copy: {
    type: String,
    default: 'The first step of the design thinking process is empathy. As a human centered process, it’s important to empathize with the user to really understand the problem they’re facing.',
  },
})
</script>

<template lang="pug">
.feature-text
  .icon
    slot
  p {{ title }}
  span {{ copy }}
</template>

<style lang="scss" scoped>
.feature-text {
  p {
    @apply text-teal-900 font-semibold text-base mb-3 mt-2;
  }

  span {
    @apply text-slate-500;
  }

  .icon {
    @apply w-12 h-12 rounded-full bg-teal-100 inline-flex items-center justify-center text-lg text-teal-700;
  }
}
</style>