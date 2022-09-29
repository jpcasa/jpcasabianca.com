<script setup>
import { useApi } from '~/composables/api'
import { useMetas } from '~/composables/metas'

import { useExperienceStore } from '~/stores/experience'

const { getCaseStudies, loading } = useApi()
const { setMetaTitle, metas } = useMetas()

const experienceStore = useExperienceStore()

setMetaTitle('Work')
useHead(metas)

const loadCaseStudies = async () => {
  const [error, response] = await getCaseStudies()
  if (error) {
    console.log(error)
    return
  }
  experienceStore.setCaseStudies(response.data)
}

onMounted(() => {
  loadCaseStudies()
})
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
      CaseStudySummary(:case-study="caseStudy")
</template>

<style lang="scss" scoped>
.case-studies {
  @apply grid relative;
  bottom: 2px;
}
</style>