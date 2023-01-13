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
})
</script>

<template lang="pug">
.page-header(:class="{ 'with-overlay': withOverlay }")
  .container
    .left(:class="`text-${align}`")
      slot
    .right
      slot(name="right")
</template>

<style lang="scss" scoped>
.page-header {
  @apply py-28 bg-teal-800;

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