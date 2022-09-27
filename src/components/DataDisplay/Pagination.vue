<script setup>
defineProps({
  pageCount: {
    type: Number,
    default: 3
  },
  page: {
    type: Number,
    default: 1
  },
})

const emit = defineEmits(['page-change'])

const pageChange = action => emit('page-change', action)
</script>

<template lang="pug">
.pagination
  .pagination-left
    Button(
      v-if="page > 1"
      type="minimal"
      @click="pageChange('prev')"
    ) Prev
    Button(
      v-if="page < pageCount"
      type="minimal"
      @click="pageChange('next')"
    ) Next
  .pagination-right
    p Page {{ page }} of {{ pageCount }}
</template>

<style lang="scss" scoped>
.pagination {
  @apply flex justify-between items-center;

  .pagination-left {
    @apply flex items-center;

    button {
      &:last-of-type {
        @apply ml-1;
      }
    }
  }

  .pagination-right {
    @apply flex-none text-slate-500;
  }
}
</style>