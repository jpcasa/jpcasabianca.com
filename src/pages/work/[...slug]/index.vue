<script setup>
import IconCheck from '~icons/uil/check'
import { useMeta } from 'vue-meta'
// import { useExperienceStore } from '~/stores/experience'
import { useCaseStudyStore } from '~/stores/caseStudies'
// import { useApi } from '~/composables/api'

// const exprienceStore = useExperienceStore()
const caseStudyStore = useCaseStudyStore()

// const { getCaseStudy, loading } = useApi()

const route = useRoute()
const loading = ref(true)
const slug = ref(null)
const error = ref(null)
const caseStudyTitle = ref('')
const caseStudyImage = ref('')

const prototypeItems = [
  'Dynamic components to save time',
  'Library of Colors, Fonts, Shadows, and more.',
  'Prototype to test UX'
]

const loadCaseStudy = () => {
  slug.value = route.params.slug
  if (slug.value) caseStudyStore.setCaseStudy(slug.value)
  else error.value = 'There was an error retreving the case study'
  loading.value = false
}

useMeta(computed(() => ({
  title: `${caseStudyTitle.value} Case Study`,
  meta: [{
    name: 'og:image',
    content: `https://oyy58age.directus.app/assets/${caseStudyImage.value}.webp`
  }]
})))

const caseStudy = computed(() => caseStudyStore.caseStudy)
const requestAccess = () => {
  const subject = 'Hey, I want access to Figma!'
  const body = `Hi JP, I would like access to the Figma file for ${caseStudyStore.caseStudy.name}.`
  window.open(`mailto:hola@jpcasabianca.com?subject=${subject}&body=${body}`)
}

onMounted(() => loadCaseStudy())
</script>

<template lang="pug">
.case-study
  .loading(v-if="loading")
    Spinner
  div(v-else-if="error")
    p {{ error }}
  div(v-else)
    PageHeader.header(
      v-if="caseStudy"
      :bg="caseStudy.header"
      align="center"
      with-overlay
    )
      .container-small
        img(:src="caseStudy.logo" :alt="`${caseStudy.name} | JP Casabianca`")
        h1 {{ caseStudy.name }}
        span {{ caseStudy.description }}
    .container-medium
      img(:src="caseStudy.img" :alt="`${caseStudy.name} | jpcasabianca.com`")
      .info-tabs-parent
        InfoTabs(:items="caseStudy.mainItems" :bar-color="caseStudy.barColor")
    .sections
      CaseStudyFeature(
        v-for="(section, i) in caseStudy.sections"
        :key="i"
        :title="section.title"
        :subtitle="section.subtitle"
        :copy="section.copy"
        :cta="section.cta"
        :img="section.img"
        :code="section.code"
        :bg="section.bg"
        :cta-color="caseStudy.ctaColor"
        :cta-bg="caseStudy.ctaBg"
        :vertical="section.vertical"
        :flex-direction="i % 2 === 0 ? 'row' : 'row-reverse'"
        @clicked="section.clickedCta()"
      )
    .cta-section
      .container-medium
        .left
          h3 Like what you’re seeing? Reach out
          p Don’t be shy! I’m open to new challenges and opportunities.
        .right
          button(:style="{ backgroundColor: caseStudy.ctaBg, color: caseStudy.ctaColor }") Get In Touch
    .figma-prototype(v-if="caseStudy.hasPrototype")
      .left
        h4 Complete Prototype in Figma with components
        .item(v-for="(item, i) in prototypeItems" :key="i")
          .icon(:style="{ backgroundColor: caseStudy.ctaBgLight, color: caseStudy.ctaBg }")
            icon-check
          p {{ item }}
        button(
          :style="{ backgroundColor: caseStudy.ctaBg, color: caseStudy.ctaColor }"
          @click="requestAccess()"
        ) Request Access
      .right
        img(:src="caseStudy.figmaPreview" :alt="`${caseStudy.name} | Figma Prototype`")
</template>

<style lang="scss" scoped>
.header {
  img {
    @apply w-40;
  }

  h1 {
    @apply text-white mt-2 mb-4;
  }

  span {
    @apply text-slate-300;
  }
}

h2, h3, h4 {
  @apply font-semibold;
  font-family: 'Inter', sans-serif;
}

.info-tabs-parent {
  @apply mt-8 mb-8;
}

.sections {
  @apply mt-32;
}

.cta-section {
  @apply my-20;

  button {
    @apply px-6 py-3 rounded;
  }
  
  .container-medium {
    @apply bg-slate-100 rounded md:flex p-10;

    .left {
      @apply flex-auto;

      h3 {
        @apply m-0 mb-4;
      }
    }

    .right {
      @apply mt-6 md:mt-0;
    }
  }
}

.figma-prototype {
  @apply grid gap-12 items-center;

  @screen md {
    @apply grid-cols-2;
  }

  button {
    @apply px-6 py-3 rounded;
  }

  img {
    @apply border rounded-t border-slate-200;
  }
  
  .left {
    @apply text-center;

    button {
      @apply mt-6;
    }

    .item {
      @apply flex items-center justify-center mb-2;

      .icon {
        @apply mr-2 w-8 h-8 rounded-full flex items-center justify-center;
      }
    }
  }
  
  @screen md {
    .left {
      @apply text-right;

      .item {
        @apply justify-end;
      }
    }
  }

  .right {
    @apply flex;
  }
}
</style>