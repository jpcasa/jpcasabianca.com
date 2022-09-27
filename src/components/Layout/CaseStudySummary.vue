<script setup>
const props = defineProps({
  caseStudy: {
    type: Object,
    default: {      
      title: 'Casabianca Cycling',
      slug: 'casabianca-cycling',
      subtitle: 'ECOMMERCE',
      summary: 'Exploring a unique opportunity in Colombia: Cycling. After picking up 5 years of expertise on ecommerce saas, I decided to open a Cycling and Atletic Apparel Store. I design every single product and made the online shop and admin from scratch.',
      titleColor: '#ffffff',
      subtitleColor: '#08D777',
      summaryColor: '#DCE6EE',
      image: '/img/case-studies/casabianca@2x.png',
      bg: '/img/case-studies/bg-casabianca.png',
      bgColor: '#ffffff',
      button: 'black',
      benefit_label_1: 'Product Design in Photoshop',
      benefit_copy_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      benefit_label_2: 'Shop created with Vue.js',
      benefit_copy_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      benefit_label_3: 'Using Database as a Service',
      benefit_copy_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
})

const moreItems = computed(() => {
  return [
    { label: props.caseStudy.benefit_label_1, copy:props.caseStudy.benefit_copy_1 },
    { label: props.caseStudy.benefit_label_2, copy:props.caseStudy.benefit_copy_2 },
    { label: props.caseStudy.benefit_label_3, copy:props.caseStudy.benefit_copy_3 }
  ]
})

const setImage = id => {
  return `${import.meta.env.VITE_ASSETS_URL}/${id}.png`
}

const bgStyles = computed(() => {
  return {
    backgroundImage: `url(${setImage(props.caseStudy.bg)})`,
    backgroundColor: props.caseStudy.bgColor
  }
})
</script>

<template lang="pug">
.case-study-summary(:style="bgStyles")
  .container-small
    p.subtitle(:style="{ color: caseStudy.subtitleColor }") {{ caseStudy.subtitle }}
    p.title(:style="{ color: caseStudy.titleColor }") {{ caseStudy.title }}
    span.summary(:style="{ color: caseStudy.summaryColor }") {{ caseStudy.summary }}
  .container-large
    img(
      v-if="caseStudy.image"
      :src="setImage(caseStudy.image)"
      :alt="`${caseStudy.title} - JP Casabianca`"
    )
    slot(v-else)
  .container-medium
    InfoTabs(:items="moreItems" :bar-color="caseStudy.benefitColor")
  .cta
    Button(:type="caseStudy.button" size="md") Read Case Study
</template>

<style lang="scss" scoped>
.case-study-summary {
  @apply bg-cover bg-center py-24;
  
  .container-small {
    @apply text-center;

    .subtitle {
      @apply font-medium text-teal-500 mb-4;
    }

    .title {
      @apply text-3xl font-medium mb-4;
    }

    .summary {
      @apply block mb-12;
    }
  }

  .container-medium {
    @apply mt-8;
  }

  .cta {
    @apply text-center mt-8;
  }
}
</style>