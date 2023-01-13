<script setup>
import IconTimes from '~icons/uil/times'

defineProps({
  title: {
    type: String,
    default: null
  },
  position: {
    type: String,
    default: 'right'
  },
})

const emit = defineEmits(['close'])
const closeDrawer = () => emit('close')
</script>

<template lang="pug">
.drawer
  .drawer-overlay(@click="closeDrawer()")
  .drawer-content
    .title(v-if="title")
      p {{ title }}
      .close-button(@click="closeDrawer()")
        IconTimes
    .content
      slot
</template>

<style lang="scss" scoped>
.drawer {
  @apply flex fixed inset-0 w-full h-full;
  z-index: 999;

  .drawer-overlay {
    @apply flex-auto h-full bg-black bg-opacity-20 cursor-pointer;
  }

  .drawer-content {
    @apply flex-none w-5/6 bg-white max-w-md overflow-y-scroll;

    .title {
      @apply flex items-center justify-between px-4 py-3 border-b border-slate-200;

      p {
        @apply text-slate-800 font-medium;
      }

      .close-button {
        @apply flex items-center justify-center w-6 h-6 bg-slate-300 rounded-full;
        @apply cursor-pointer text-black;

        &:hover {
          @apply bg-slate-600 text-white;
        }
      }
    }

    .content {
      @apply p-6;
    }
  }
}
</style>