<script setup>
import { useMeta } from 'vue-meta'
import { useExperienceStore } from '~/stores/experience'
import { useApi } from '~/composables/api'

const exprienceStore = useExperienceStore()

const { getCaseStudy, loading } = useApi()

const route = useRoute()
const slug = ref(null)
const caseStudyTitle = ref('')

const fetchCaseStudy = async slug => {
  const [error, response] = await getCaseStudy(slug)
  if (error) return
  exprienceStore.setCaseStudy(response.data[0])
  caseStudyTitle.value = exprienceStore.caseStudy.title
}

const loadCaseStudy = () => {
  slug.value = route.params.slug
  if (slug.value) fetchCaseStudy(slug.value)
}

useMeta(computed(() => ({
  title: `${caseStudyTitle.value} Case Study`
})))

onMounted(() => loadCaseStudy())
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