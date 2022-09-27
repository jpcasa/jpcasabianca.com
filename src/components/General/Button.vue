<script setup>
const router = useRouter()

// define props
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'sm'
  },
  link: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['click'])

const clicked = () => {
  if (props.link) router.push(props.link)
  emit('click')
}
</script>

<template lang="pug">
button(:class="[type, size]" @click="clicked()")
  slot
</template>

<style lang="scss" scoped>
button {
  @apply inline-flex rounded;
}

button.xs {
  @apply px-2 py-1 text-xs;
}

button.sm {
  @apply px-3 py-1 text-sm;
}

button.md {
  @apply px-4 py-2 text-base;
}

button.lg {
  @apply px-6 py-3 text-base;
}

button.primary {
  @apply text-white bg-teal-500 hover:bg-teal-600;
}

button.default {
  @apply text-white bg-teal-600;

  &:hover {
    background-color: #006335;
  }
}

button.secondary {
  @apply text-teal-500 border-teal-500 border;

  &:hover {
    @apply border-white text-white;
  }
}

button.dark {
  @apply text-white bg-teal-800 hover:bg-teal-900;
}

button.black {
  @apply text-white bg-black;
}

button.minimal {
  @apply text-slate-600 border border-slate-200;

  &:hover {
    @apply bg-slate-100;
  }
}

button.purple {
  @apply text-white;
  background-color: #7F56D9;
}
</style>