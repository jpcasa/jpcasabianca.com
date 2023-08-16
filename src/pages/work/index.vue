<script setup>
import { useMeta } from 'vue-meta'
import { useApi } from '~/composables/api'

import { useExperienceStore } from '~/stores/experience'

const { getCaseStudies, loading } = useApi()

const experienceStore = useExperienceStore()

useMeta({ title: 'Work' })

const loadCaseStudies = async () => {
  const [error, response] = await getCaseStudies()
  if (error) {
    console.log(error)
    return
  }
  experienceStore.setCaseStudies(response)
}

onMounted(() => loadCaseStudies())
</script>

<template lang="pug">
div
  .loading(v-if="loading")
    Spinner
  .case-studies(v-else-if="!loading && experienceStore.caseStudies")
    .case-study(
      v-for="(caseStudy, i) in experienceStore.caseStudies"
      :key="i"
    )
      CaseStudySummary(:case-study="caseStudy.attributes")
</template>

<style lang="scss" scoped>
.case-studies {
  @apply grid relative;
  bottom: 2px;
}
</style>