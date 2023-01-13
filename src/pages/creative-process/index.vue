<script setup>
import { NModal } from 'naive-ui'

import IconHeart from '~icons/uil/heart'
import IconCrosshair from '~icons/uil/crosshair'
import IconLightbulb from '~icons/uil/lightbulb'
import IconCloudComputing from '~icons/uil/cloud-computing'
import IconUsersAlt from '~icons/uil/users-alt'
import IconRefresh from '~icons/uil/refresh'

const showModal = ref(false)

const designItems = [
  {
    title: 'Empathize',
    copy: 'The first step of the design thinking process is empathy. As a human centered process, it’s important to empathize with the user to really understand the problem they’re facing',
    icon: IconHeart,
  },
  {
    title: 'Define',
    copy: 'After understanding what the problem is, you have to define it. It sound easy, but it’s the most difficult  step. You have to be 100% crystal clear with what  the problem is',
    icon: IconCrosshair,
  },
  {
    title: 'Ideate',
    copy: 'Defining the problem lets us ideate a solution. Taking in account the empathy side, it’s important to ideate a solution that best solves the problem the user is facing',
    icon: IconLightbulb,
  },
  {
    title: 'Prototype',
    copy: 'A really important step before continuing to coding is to prototype. Apps like Figma, Invision, and Framer allow us to create high fidelity prototypes to test UX as well as UI',
    icon: IconCloudComputing,
  },
  {
    title: 'Test',
    copy: 'After creating a high-fidelity prototype, you can start testing it out with real users or teammates. Testing gives us the feedback we need to improve problems, bugs, and more',
    icon: IconUsersAlt,
  },
  {
    title: 'Iterate',
    copy: 'You won’t probably nail the prototype in the first run. Iterating the process and trying to tweak your design to make it as best as possible for the user is really important',
    icon: IconRefresh,
  }
]
</script>

<template lang="pug">
.process-page
  PageHeader.process-header(align="center")
    .small-cont
      p Design &amp; Development
      h1 Creative Process
      span A really quick snapshot of what my creative/work process looks like. If you like what you’re seeing, don’t hesitate to reach out!
  .container
    .container-small.creative-img
      img(src="/img/process-main.png" alt="Creative Process - JP Casabianca")
  .design-section
    .container-small
      TextSection(
        title="Human Centered Design"
        subtitle="The Design Process"
        description="I start by understanding the problem, then I research and ideate, then I prototype and test, and finally I iterate and improve. I also use a lot of creativity and design thinking to come up with solutions that are both functional and beautiful."
      )
    .container
      .design-process
        .design-process-item(v-for="(item, i) in designItems" :key="i")
          FeatureText(
            :title="item.title"
            :copy="item.copy"
          )
            component(:is="item.icon")
      .container-medium
        CTASection(@clicked="showModal = true")
  .code-section
    .container-large
      .left
        TextSection(
          text-align="text-left"
          title="Human Centered Design"
          subtitle="The Design Process"
          description="I start by understanding the problem, then I research and ideate, then I prototype and test, and finally I iterate and improve. I also use a lot of creativity and design thinking to come up with solutions that are both functional and beautiful."
          :normal-title="false"
          padding="p-0"
        )
      .right
        img(src="/img/code-process.png" alt="Code Process - JP Casabianca")
  .usual-apps
    .container-4
      TextSection(
        title="Productivity & Organization"
        subtitle="Some of the apps I use everyday"
        description="These are some of the apps that I use everyday for work, productivity, and organization. I use a whole bunch, but these are the ones I use the most."
      )
      .apps
        .app(v-for="i in 18" :key="i")
          img(:src="`/img/apps/app-${i}.webp`" alt="JP Casabianca App")
      .text-center
        Button(link="/work" size="lg") See My Work
n-modal(v-model:show="showModal")
  Card(padding="p-8" max-width="max-w-xl")
    Contact
</template>

<style lang="scss" scoped>
.process-header {
  p {
    @apply text-teal-500 font-medium mb-3;
  }

  h1 {
    @apply text-white mb-6;
  }

  span {
    @apply text-slate-200;
  }
}

.creative-img {
  img {
    @apply rounded border border-slate-200 shadow-lg;
  }
}

.design-section {
  @apply bg-cover bg-top pb-32;
  background-image: url('/img/design-bg.png');

  .container-medium {
    @apply mt-32;
  }
}

.design-process {
  @apply grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-12;
}

.code-section {
  @apply bg-slate-100 py-24;

  .left {
    @apply mb-16;
  }
  
  .container-large {
    @apply md:grid md:grid-cols-2 md:gap-12 items-center;
  }
}

.usual-apps {
  @apply mb-16;
}
</style>