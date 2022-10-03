<script setup>
// import experience pinia store
import { useExperienceStore } from '~/stores/experience'

import { useMetas } from '~/composables/metas'
import { useApi } from '~/composables/api'

const exprienceStore = useExperienceStore()

const { setMetaTitle, metas } = useMetas()
const { getCaseStudy, loading } = useApi()

const route = useRoute()
const slug = ref(null)
const metaTitle = ref('')

const fetchCaseStudy = async slug => {
  const [error, response] = await getCaseStudy(slug)
  if (error) return
  exprienceStore.setCaseStudy(response.data[0])
  metaTitle.value = response.data[0].title
  setMetaTitle(metaTitle.value)
}

const loadCaseStudy = () => {
  slug.value = route.params.slug
  if (slug.value) fetchCaseStudy(slug.value)
}

onMounted(() => {
  loadCaseStudy()
  useHead(metas)
})
</script>

<template lang="pug">
.case-study
  .loading(v-if="loading")
    Spinner
  .case-study-container(v-else-if="!loading && exprienceStore.caseStudy")
    CaseStudySummary(:with-cta="false" :case-study="exprienceStore.caseStudy")
</template>

<style lang="scss" scoped>
.case-study {
  @apply relative;
  bottom: 2px;
}
</style>