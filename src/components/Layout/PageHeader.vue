<script setup>
defineProps({
  align: {
    type: String,
    default: 'left',
  },
})
</script>

<template lang="pug">
.page-header
  .container
    .left(:class="`text-${align}`")
      slot
    .right
      slot(name="right")
</template>

<style lang="scss" scoped>
.page-header {
  @apply pt-28 pb-36 -mb-16 bg-teal-800;

  .container {
    @apply flex items-center justify-between;

    .left {
      @apply flex-auto;
    }
  }
}
</style>