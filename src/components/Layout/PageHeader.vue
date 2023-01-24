<script setup>
defineProps({
  align: {
    type: String,
    default: 'left',
  },
  withOverlay: {
    type: Boolean,
    default: true,
  },
  bg: {
    type: String,
    default: '#003535',
  },
})
</script>

<template lang="pug">
.page-header(
  :class="{ 'with-overlay': withOverlay }"
  :style="{ background: bg }"
)
  .container
    .left(:class="`text-${align}`")
      slot
    .right
      slot(name="right")
</template>

<style lang="scss" scoped>
.page-header {
  @apply py-28;

  .container {
    @apply flex items-center justify-between;

    .left {
      @apply flex-auto;
    }
  }
}

.page-header.with-overlay {
  @apply pb-40 -mb-24;
}
</style>