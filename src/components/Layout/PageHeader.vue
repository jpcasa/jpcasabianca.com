<script setup></script>

<template lang="pug">
.page-header
  .container
    .left
      slot
    .right
      slot(name="right")
</template>

<style lang="scss" scoped>
.page-header {
  @apply pt-24 pb-32 -mb-16 bg-teal-800;

  .container {
    @apply flex items-center justify-between;

    .left {
      @apply flex-auto;
    }
  }
}
</style>