<script setup>
const props = defineProps({
  withCta: {
    type: Boolean,
    default: true,
  },
  caseStudy: {
    type: Object,
    default: {
      slug: '41366df2-9bc0-485b-9e38-ca850d3ce5d7',
      status: 'published',
      sort: 'ul',
      user_created: '76cf51ab-ad38-44be-8a31-d7f235660182',
      date_created: '2022-09-26T23:23:27.966Z',
      user_updated: '76cf51ab-ad38-44be-8a31-d7f235660182',
      date_updated: '2022-09-28T00:35:46.454Z',
      title: 'Casabianca Cycling',
      subtitle: 'Ecommerce',
      summary: 'Exploring a unique opportunity in Colombia: cycling. After picking up 5 years of expertise on ecommerce saas, I decided to open a Cycling an ,Atletic Apparel Store. I design every single product and made the online shop and admin from scratch.',
      titleColor: '#FFFFFF',
      subtitleColor: '#08D777',
      summaryColor: '#DCE6EE',
      image: '425bde6b-2cfd-4be3-b9a1-a84d4a97d706',
      bg: '65c2c226-2546-4d8b-ac1a-fbd6d581af9e',
      bgColor: '#FFFFFF',
      button: 'default',
      benefit_label_1: 'Product Design in Photoshop',
      benefit_copy_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      benefit_label_2: 'Shop created with Vue.js',
      benefit_copy_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      benefit_label_3: 'Using Database as a Service',
      benefit_copy_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      logo: 'f5cc011c-8716-4ff8-8c20-dec73b9431c7',
      benefitColor: '#005353',
      seo_slug: 'casabianca-cycling',
      mobile_image: 'ba60fc2c-621e-43d3-90b0-365b2c1c0ab1',
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
    img.logo(:src="setImage(caseStudy.logo)" alt="JP Casabianca")
    p.title(:style="{ color: caseStudy.titleColor }") {{ caseStudy.title }}
    span.summary(:style="{ color: caseStudy.summaryColor }") {{ caseStudy.summary }}
  .container-medium.imgs
    img(
      v-if="caseStudy.image"
      :src="setImage(caseStudy.image)"
      :alt="`${caseStudy.title} - JP Casabianca`"
      class="from-tablet"
    )
    img(
      v-if="caseStudy.mobile_image"
      :src="setImage(caseStudy.mobile_image)"
      :alt="`${caseStudy.title} - JP Casabianca`"
      class="mobile"
    )
    slot(v-else)
  .container-medium
    InfoTabs(:items="moreItems" :bar-color="caseStudy.benefitColor")
  .cta(v-if="withCta")
    Button(
      :type="caseStudy.button"
      :link="`/work/${caseStudy.seo_slug}`"
      size="md"
    ) Read Case Study
</template>

<style lang="scss" scoped>
.case-study-summary {
  @apply bg-cover bg-center py-24;
  
  .container-small {
    @apply text-center;

    .logo {
      @apply w-32 mx-auto mb-4;
    }

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

  .imgs {
    .mobile {
      @apply md:hidden;
    }

    .from-tablet {
      @apply hidden md:block;
    }
  }

  .container-medium {
    @apply mt-12;
  }

  .cta {
    @apply text-center mt-12;
  }
}
</style>