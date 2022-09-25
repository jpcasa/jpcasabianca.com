<script setup>
defineProps({
  size: {
    type: String,
    default: 'sm'
  },
  type: {
    type: String,
    default: 'default'
  },
})
</script>

<template lang="pug">
.tag(:class="[size, type]")
  slot
</template>

<style lang="scss" scoped>
.tag {
  @apply inline-flex items-center rounded-full;
}

.tag.sm {
  @apply text-xs px-2 py-1;
}

.tag.md {
  @apply text-sm px-3 py-1;
}

.tag.default {
  background-color: #DCE6EE;
  color: #464F5A;
}

.tag.green {
  background-color: #E9FDF1;
  color: #20B368;
}

.tag.blue {
  background-color: #ECF7FF;
  color: #2985F9;
}

.tag.blue-dark {
  background-color: #EBF2FF;
  color: #5667F1;
}

.tag.purple {
  background-color: #F8F4FF;
  color: #936CEA;
}

.tag.pink {
  background-color: #FDF0F9;
  color: #EE51BB;
}

.tag.orange {
  background-color: #FEF5EB;
  color: #EC5D1E;
}

.tag.red {
  background-color: #FEF1F0;
  color: #EE3C31;
}
</style>