<script setup>
import { NDatePicker } from 'naive-ui'

// import skills pinia store
import { useSkillsStore } from '~/stores/skills'

const skillsStore = useSkillsStore()

const { skillActive } = storeToRefs(skillsStore)

const tags = [
  { label: 'Design', value: 'design' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Customer Success', value: 'customer-success' },
  { label: 'Sales', value: 'sales' },
]

const range = ref([118313526e4, Date.now()])

const setSkillTab = tab => skillActive.value = tab
</script>

<template lang="pug">
.about-page
  .about-header
    .container
      .left
        h1 Hey there, I'm a senior designer and developer. I love building cool shit and having some beers.
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas pharetra. Penatibus et magnis dis parturient.
        Button(type="primary" size="md") Let's Connect
      .right
        img(src="/img/about@2x.png" alt="JP Casabianca")
  .container.top
    .logos 
      img(src="/img/logos.png" alt="JP Casabianca - Apps")
    .skills
      .container-small
        TextSection
        .tabs-parent
          Tabs(
            :tabs="skillsStore.skills"
            :active="skillActive"
            @change="setSkillTab"
          )
      .container-medium.skill-charts
        Card(padding="p-8")
          SkillChart(
            :datasets="skillsStore.activeSkills.items"
          )
        Card(padding="p-8")
          .soft-skills
            .chart-left
              RadarChart(:chart-data="skillsStore.chartData")
            .chart-right
              p {{ skillsStore.activeSoftSkill.name }}
              span {{ skillsStore.activeSoftSkill.description }}
              .options
                .option
                  i.uil.uil-arrow-left(@click="skillsStore.changeSoftSkillsIndex('prev')")
                .option
                  i.uil.uil-arrow-right(@click="skillsStore.changeSoftSkillsIndex('next')")
  .experience
    .container-medium
      .experience-left
        TextSection(padding="p-0" text-align="text-left")
        .filter-date
          p.label Filter experience by date:
          n-date-picker(v-model:value="range" type="daterange")
        .filter-tags
          p.label Filter experience by subject:
          .tags
            Tag(v-for="(tag, i) in tags" :key="i") {{ tag.label }}
      .experience-right
        h2 Algo más
</template>

<style lang="scss" scoped>
.about-page {
  @apply bg-gray-100 pb-24;
}

.experience {
  @apply -mt-32 bg-white;

  .container-medium {
    @apply pt-72;

    @screen md {
      @apply flex;

      .experience-left {
        @apply w-64 mr-8 flex-none;
      }

      .experience-right {
        @apply flex-auto;
      }
    }
  }
}

.about-header {
  @apply pt-16 pb-8 bg-cover;
  background-image: url('/img/about-bg.png');

  h1 {
    @apply text-white mt-4;

    @screen xl {
      @apply mt-12;
    }
  }

  p {
    @apply text-gray-300 mt-6 mb-4;
  }

  .container {
    @apply grid gap-8 pt-12;

    @screen lg {
      @apply grid-cols-2;
    }
  }

  .left {
    @apply lg:pl-8;
  }
}

.logos {
  @apply max-w-sm mx-auto pb-24;
}

.tabs-parent {
  @apply flex justify-center mt-8 pb-8;
}

.skill-charts {
  @apply grid gap-8;
}

.soft-skills {
  @apply grid gap-8;

  @screen md {
    @apply grid-cols-2 items-center gap-12;
  }

  .options {
    @apply flex items-center mt-6;

    .option {
      @apply text-slate-400 rounded-full text-2xl w-8 h-8 border;
      @apply cursor-pointer border-slate-200 inline-flex items-center justify-center;      

      &:last-of-type {
        @apply ml-1;
      }

      &:hover {
        @apply text-teal-600 border-teal-600;
      }
    }
  }

  .chart-right {
    p {
      @apply font-medium mb-4 text-lg text-teal-900;
    }

    span {
      @apply text-slate-500;
    }
  }
}
</style>