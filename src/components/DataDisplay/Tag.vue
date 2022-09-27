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
  border: {
    type: Boolean,
    default: false
  },
  cursor: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const clicked = () => emit('click')
</script>

<template lang="pug">
.tag(
  :class="[size, type, { border, 'cursor-pointer': cursor }]"
  @click="clicked()"
)
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

.tag.default.border {
  background-color: transparent;
  border: 1px solid #DCE6EE;
}

.tag.green {
  background-color: #E9FDF1;
  color: #20B368;
}

.tag.green.border {
  background-color: transparent;
  border: 1px solid #20B368;
}

.tag.blue {
  background-color: #ECF7FF;
  color: #2985F9;
}

.tag.blue.border {
  background-color: transparent;
  border: 1px solid #2985F9;
}

.tag.blue-dark {
  background-color: #EBF2FF;
  color: #5667F1;
}

.tag.blue-dark.border {
  background-color: transparent;
  border: 1px solid #5667F1;
}

.tag.purple {
  background-color: #F8F4FF;
  color: #936CEA;
}

.tag.purple.border {
  background-color: transparent;
  border: 1px solid #936CEA;
}

.tag.pink {
  background-color: #FDF0F9;
  color: #EE51BB;
}

.tag.pink.border {
  background-color: transparent;
  border: 1px solid #EE51BB;
}

.tag.orange {
  background-color: #FEF5EB;
  color: #EC5D1E;
}

.tag.orange.border {
  background-color: transparent;
  border: 1px solid #EC5D1E;
}

.tag.red {
  background-color: #FEF1F0;
  color: #EE3C31;
}

.tag.red.border {
  background-color: transparent;
  border: 1px solid #EE3C31;
}

.tag.yellow {
  background-color: #FFFEE8;
  color: #DFBD0A;
}

.tag.yellow.border {
  background-color: transparent;
  border: 1px solid #DFBD0A;
}
</style>