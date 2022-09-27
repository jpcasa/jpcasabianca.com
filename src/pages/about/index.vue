<script setup>
import { NDatePicker } from 'naive-ui'

// import api composable
import { useApi } from '~/composables/api'

// import skills pinia store
import { useSkillsStore } from '~/stores/skills'
import { useExperienceStore } from '~/stores/experience'

const skillsStore = useSkillsStore()
const experienceStore = useExperienceStore()

const { getCaseStudies, loading } = useApi()

const { skillActive } = storeToRefs(skillsStore)

const tags = [
  { label: 'Design', value: 'design', type: 'blue' },
  { label: 'Frontend', value: 'frontend', type: 'green' },
  { label: 'Backend', value: 'backend', type: 'pink' },
  { label: 'Marketing', value: 'marketing', type: 'purple' },
  { label: 'Customer Success', value: 'customer-success', type: 'blue-dark' },
  { label: 'Business', value: 'business', type: 'orange' },
  { label: 'Sales', value: 'sales', type: 'red' },
]

const range = ref([118313526e4, Date.now()])

const setSkillTab = tab => skillActive.value = tab

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
        TextSection(
          title="My Experience"
          subtitle="The companies I’ve worked with"
          padding="p-0"
          text-align="text-left"
        )
        .filter-tags
          p.label Filter experience by subject:
          .tags
            .tag-parent
              Tag(
                v-for="(tag, i) in tags"
                :key="i"
                :type="experienceStore.subjectFilters.includes(tag.value) ? tag.type : 'default'"
                size="md"
                border
                cursor
                @click="experienceStore.toggleSubjectFilter(tag)"
              ) {{ tag.label }}
      .experience-right
        .filters-active(v-if="experienceStore.subjectFiltersString")
          span Filtered by:
          p {{ experienceStore.subjectFiltersString }}
        .experience-row(
          v-for="(exp, i) in experienceStore.experiences"
          :key="i"
        )
          ExperienceCard(
            :company="exp.company"
            :logo="exp.logo"
            :role="exp.role"
            :startDate="exp.startDate"
            :endDate="exp.endDate"
            :tags="exp.tags"
            :summary="exp.summary"
            :location="exp.location"
          )
        .pagination-parent(v-if="!experienceStore.subjectFilters.length")
          Pagination(
            :page="experienceStore.page"
            :page-count="experienceStore.pages"
            @page-change="experienceStore.changePage"
          )
        .pagination-clear(v-else)
          Button(
            type="minimal"
            size="md"
            @click="experienceStore.clearFilters()"
          )
            span Clear Filters
            i.uil.uil-times
  .case-studies
    .loading(v-if="loading")
      p Loading case studies...
    div(v-else-if="!loading && experienceStore.caseStudies")
      .case-study(v-for="(caseStudy, i) in experienceStore.caseStudies" :key="i")
        CaseStudySummary(:case-study="caseStudy")
  .usual-apps
    .container-4
      TextSection(
        title="My Usual Apps"
        subtitle="Some of the apps I use everyday"
      )
      .apps
        .app(v-for="i in 18" :key="i")
          img(:src="`/img/apps/app-${i}.png`" alt="JP Casabianca App")
  .testimonies
    .container-4
      TextSection(
        title="What People are Saying..."
        subtitle="Some honest testimonials from people I’ve worked with"
      )
      TestimonySlider
</template>

<style lang="scss" scoped>
.about-page {
  @apply bg-gray-100;
}

.pagination-clear {
  i {
    @apply ml-1;
  }
}

.testimonies {
  @apply bg-white;

  .container-4 {
    @apply mb-24;
  }
}

.usual-apps {
  @apply py-12;

  .apps {
    @apply grid gap-6 grid-cols-4 sm:grid-cols-5 md:grid-cols-7;
    @apply lg:grid-cols-9 mb-20;

    .app {
      @apply text-center;
      
      img {
        @apply h-12 w-auto mx-auto;
      }
    }
  }
}

.experience {
  @apply -mt-32 bg-white pb-32;

  .container-medium {
    @apply pt-72;

    @screen md {
      @apply flex;

      .experience-left {
        @apply w-72 mr-8 flex-none;

        .filter-date,
        .filter-tags {
          @apply mt-8;
        }

        .label {
          @apply text-teal-900 font-medium mb-3;
        }
      }

      .experience-right {
        @apply flex-auto;

        .filters-active {
          @apply capitalize text-sm text-gray-500 mb-4 flex flex-wrap;
          @apply border-b border-slate-200 pb-4;

          span {
            @apply text-black font-medium mr-1;
          }
        }

        .experience-row {
          @apply mb-8 pb-8 border-b border-slate-200;
        }
      }
    }
  }

  .tags {
    @apply flex flex-wrap;

    .tag {
      @apply mr-1 mb-1;
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