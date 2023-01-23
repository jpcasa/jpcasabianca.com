<script setup>
const moreItems = [
  { label: 'Product Design in Photoshop', copy: 'I design the cycling apparel in Photoshop with a great set of mockups. With this tool, we can really get a real sense of how the products will look like in real life.' },
  { label: 'Shop created with Vue.js', copy: 'No questions when choosing the framework and language. In this case, I used Nuxt.js and Vue to create a minimal and awesome online shop. ' },
  { label: 'Using Database as a Service', copy: 'I\'m using Strapi for my Database as a service. Strapi is an open source Javascript framework that enables you to create APIs in seconds.' }
]
</script>

<template lang="pug">
.resources-page
  PageHeader.header(align="center" with-overlay)
    .container-small
      img(src="/img/casabianca-logo.webp" alt="Casabianca Cycling Logo")
      h1 Casabianca Cycling
      span Exploring a unique opportunity in Colombia: Cycling. After picking up 5 years of expertise on ecommerce saas, I decided to open a Cycling and Atletic Apparel Store. I design every single product and made the online shop and admin from scratch. 
  .container
    img(src="/img/case-studies/casabianca-top.webp" alt="Casabianca Cycling | jpcasabianca.com")
    .info-tabs-parent
      InfoTabs(:items="moreItems" bar-color="#005353")
  .sections
    CaseStudyFeature(
      title="Using Photoshop to design the cycling apparel mockups"
      subtitle="Apparel Mockups"
      copy="Photoshop is a pain in the ass for everything except mockups! We love to use it to design our apparel though... We have a complete set of garments that really help us visualize the design before sending it to the printers and then sewing."
      cta="Get in touch"
      img="/img/case-studies/casabianca-1.webp"
    )
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

.info-tabs-parent {
  @apply mt-4 mb-8;
}

.sections {
  @apply mt-32;
}
</style>