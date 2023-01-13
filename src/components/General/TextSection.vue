<script setup>
defineProps({
  subtitle: {
    type: String,
    default: 'These are my soft and hard skills'
  },
  title: {
    type: String,
    default: 'Check out my skills'
  },
  description: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas pharetra. Penatibus et magnis dis parturient.'
  },
  textAlign: {
    type: String,
    default: 'text-center'
  },
  padding: {
    type: String,
    default: 'py-16'
  },
  normalTitle: {
    type: Boolean,
    default: true
  }
})
</script>

<template lang="pug">
div(:class="[textAlign, padding]")
  p.subtitle {{ subtitle }}
  p.title(:class="{ normal: normalTitle, strong: !normalTitle }") {{ title }}
  p.description {{ description }}
</template>

<style lang="scss" scoped>
.subtitle {
  @apply font-medium text-teal-600 mb-4;
}

.title {
  @apply text-white text-2xl mb-4 text-teal-900;
}

.title.normal {
  font-family: 'DM Serif Display', serif;
}

.title.strong {
  @apply font-semibold;
}

.description {
  @apply text-slate-500;
}
</style>