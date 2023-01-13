<script setup>
defineProps({
  title: {
    type: String,
    default: 'Do you agree this is the best design process?'
  },
  copy: {
    type: String,
    default: 'Don’t by shy and reach out! I’m open to work and collaborate.'
  },
  cta: {
    type: String,
    default: 'Get in touch'
  },
})

const emit = defineEmits(['clicked'])
const clickedCta = () => emit('clicked')
</script>

<template lang="pug">
.cta-section
  .left
    p {{ title }}
    span {{ copy }}
  .right
    Button(size="lg" @click="clickedCta") {{ cta }}
</template>

<style lang="scss" scoped>
.cta-section {
  @apply bg-slate-100 rounded p-8;

  @screen md {
    @apply flex justify-between;
  }

  p {
    @apply font-medium text-teal-900 text-lg mb-2;
  }

  span {
    @apply text-slate-500;
  }

  .right {
    @apply mt-6 md:mt-0;
  }
}
</style>