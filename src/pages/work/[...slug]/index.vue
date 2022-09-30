<script setup>
import { useMetas } from '~/composables/metas'

const { setMetaTitle, metas } = useMetas()

setMetaTitle('This is the title of the case study')
useHead(metas)
</script>

<template lang="pug">
.case-study
  CaseStudySummary(:with-cta="false")
</template>

<style lang="scss" scoped>
.case-study {
  @apply relative;
  bottom: 2px;
}
</style>