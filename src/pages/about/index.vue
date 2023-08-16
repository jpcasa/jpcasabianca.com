<script setup>
import IconArrowLeft from '~icons/uil/arrow-left'
import IconArrowRight from '~icons/uil/arrow-right'
import IconTimes from '~icons/uil/times'

import { NModal } from 'naive-ui'
import { useMeta } from 'vue-meta'

import { useApi } from '~/composables/api'

// import skills pinia store
import { useSkillsStore } from '~/stores/skills'
import { useExperienceStore } from '~/stores/experience'
import { useTestimoniesStore } from '~/stores/testimonies'

const skillsStore = useSkillsStore()
const experienceStore = useExperienceStore()
const testimoniesStore = useTestimoniesStore()

const {
  getCaseStudies,
  getSkills,
  getExperience,
  loading,
  loadingSkills,
  loadingExperience
} = useApi()

useMeta({ title: 'About Me' })

const arr = [
  'I create awesome digital experiences.',
  'I design prototypes in Figma.',
  'I use Vue 3 and Github Copilot to get shit done.',
  'I love Gravel and Road Cycling.',
  'I own a Sports Apparel Brand.',
  'I play Zelda and PS4.'
]
const tags = [
  { label: 'Design', value: 'design', type: 'blue' },
  { label: 'Frontend', value: 'frontend', type: 'green' },
  { label: 'Backend', value: 'backend', type: 'pink' },
  { label: 'Marketing', value: 'marketing', type: 'purple' },
  { label: 'Customer Success', value: 'customer-success', type: 'blue-dark' },
  { label: 'Business', value: 'business', type: 'orange' },
  { label: 'Sales', value: 'sales', type: 'red' },
]

const { skillActive } = storeToRefs(skillsStore)
const range = ref([118313526e4, Date.now()])
const showModal = ref(false)

const setSkillTab = tab => skillActive.value = tab

const loadCaseStudies = async () => {
  const [error, response] = await getCaseStudies()
  if (error) return
  experienceStore.setCaseStudies(response.data)
}

const loadSkills = async () => {
  const [error, response] = await getSkills()
  if (error) return
  skillsStore.setSoftSkills(response.data)
}

const loadExperience = async () => {
  const [error, response] = await getExperience()
  if (error) return
  experienceStore.setExperience(response.data)
}

const loadData = () => {
  loadCaseStudies()
  loadSkills()
  loadExperience()
}

const downloadCV = () => window.location.href = '/PDF/CV_2023.pdf'

onMounted(() => {
  loadData()
})
</script>

<template lang="pug">
.about-page
  .about-header
    .container
      .left
        h1
          | Hey, I’m JP. An experienced UI/UX Designer and Engineer.
          span
            VueWriter(:array="arr" :typeSpeed="70")
        p.copy 
          | I can build full prototypes in Figma/Framer designed from scratch. Also, I can code them in Vue3/React and Vite.js, so I really bring value to product teams. I love new challenges and gravel cycling! Most recently leading product over at
          a(href="https://www.cartkit.com/" target="_blank") Cartkit
          | and founded
          a(href="https://www.casabianca.cc" target="_blank") Casabianca.cc Cycling Apparel.
        Button(type="primary" size="md" @click="showModal = true") Let's Connect
      .right
        img(src="/img/about-2.webp" alt="JP Casabianca")
  .container.top
    .logos 
      img(src="/img/logos.webp" alt="JP Casabianca - Apps")
    .skills
      .container-small
        TextSection(padding="pt-0 pb-4" description="You can find out what tools, apps, and services I use in my day-to-day work and life. Find design, frontend, backend, and marketing skills.")
        .tabs-parent
          Tabs(
            :tabs="skillsStore.skills"
            :active="skillActive"
            @change="setSkillTab"
          )
      .container-medium.skill-charts
        Card(padding="p-6")
          SkillChart(
            :datasets="skillsStore.activeSkills.items"
          )
        Card(padding="p-8")
          .soft-empty(v-if="loadingSkills")
            .loading
              Spinner(:full-screen="false")
          .soft-skills(v-else-if="!loadingSkills && skillsStore.softSkills")
            .chart-left
              RadarChart(:chart-data="skillsStore.chartData")
            .chart-right
              p.title {{ skillsStore.activeSoftSkill.attributes.name }}
              .description(v-html-safe="skillsStore.activeSoftSkill.attributes.description")
              .options
                .option
                  icon-arrow-left(
                    class="text-xl text-slate-500"
                    @click="skillsStore.changeSoftSkillsIndex('prev')"
                  )
                .option
                  icon-arrow-right(
                    class="text-xl text-slate-500"
                    @click="skillsStore.changeSoftSkillsIndex('next')"
                  )
          .soft-skills-error(v-else)
            p No Soft Skills Found
  .experience
    .container-medium
      .experience-left
        TextSection(
          title="My Experience"
          subtitle="The companies I’ve worked with"
          description="You can find out what experiences I’ve had in my career. I’ve worked with a lot of companies and startups as a designer, developer, and adevisor. I’ve also been a product manager and a business owner. Feel free to filter by subject below:"
          padding="p-0"
          text-align="text-left"
        )
        .filter-date
          p.label Resume
          span Download a copy of my latest resume in PDF
          Button(@click="downloadCV()") Download CV
      .experience-right
        .filters-active(v-if="experienceStore.subjectFiltersString")
          span Filtered by:
          p {{ experienceStore.subjectFiltersString }}
        .experiences(v-if="experienceStore.experience")
          .experience-row(
            v-for="(exp, i) in experienceStore.experiences"
            :key="i"
          )
            ExperienceCard(
              :company="exp.attributes.company"
              :logo="exp.attributes.logo"
              :role="exp.attributes.role"
              :startDate="exp.attributes.start_date"
              :endDate="exp.attributes.end_date"
              :tags="exp.attributes.tags"
              :summary="exp.attributes.summary"
              :complete-summary="exp.attributes.complete_summary"
              :location="exp.attributes.location"
              :link="exp.attributes.link"
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
              icon-times
  .case-studies
    .loading(v-if="loading")
      p Loading case studies...
    div(v-else-if="!loading && experienceStore.caseStudies")
      .case-study(
        v-for="(caseStudy, i) in experienceStore.caseStudies.slice(0, 3)"
        :key="i"
      )
        CaseStudySummary(:case-study="caseStudy.attributes")
  .usual-apps
    .container-4
      TextSection(
        title="My Usual Apps"
        subtitle="Some of the apps I use everyday"
        description="These are some of the apps that I use everyday for work, personal, and hobbies. "
      )
      .apps
        .app(v-for="i in 18" :key="i")
          img(:src="`/img/apps/app-${i}.webp`" alt="JP Casabianca App")
  .testimonies
    .container-4
      TextSection(
        title="What People are Saying..."
        subtitle="Some honest testimonials from people I’ve worked with"
        description="These are some of the testimonials I’ve received from people I’ve worked with. I’ve worked with a lot of companies and startups as a designer, developer, and adevisor. I’ve also been a product manager and a business owner."
        padding="py-24"
      )
      TestimonySlider(:testimonies="testimoniesStore.testimonies")
n-modal(v-model:show="showModal")
  Card(padding="p-16" max-width="max-w-xl")
    Contact
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

.experience {
  @apply -mt-32 bg-white pb-32;

  .filter-date,
  .filter-tags {
    @apply mt-8;
  }

  .filter-date {
    span {
      @apply block text-sm text-slate-500 mb-4;
    }
  }

  .label {
    @apply text-teal-900 font-medium mb-3;
  }

  .filters-active {
    @apply capitalize text-sm text-gray-500 mb-4 flex flex-wrap;
    @apply border-b border-slate-200 pb-4;

    span {
      @apply text-black font-medium mr-1;
    }
  }

  .experience-row {
    @apply mb-8 pb-8 border-b border-slate-200;

    &:first-of-type {
      @apply border-t border-slate-200 pt-8;
    }
  }

  .experience-right {
    @apply mt-8;        
  }

  .container-medium {
    @apply pt-56;

    @screen md {
      @apply flex pt-72;

      .experience-left {
        @apply w-72 mr-8 flex-none;
      }

      .experience-right {
        @apply flex-auto mt-0;
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

    span {
      @apply text-teal-500 underline;
    } 
  }

  p {
    @apply text-gray-300 mt-6 mb-8;

    a {
      @apply mx-1 text-white underline;
    }
  }

  .container {
    @apply grid gap-8 pt-12;

    @screen lg {
      @apply grid-cols-2;
    }
  }

  .left {
    @apply lg:pl-8 text-center lg:text-left;
  }
}

.logos {
  @apply max-w-sm mx-auto pb-24;
}

.skills {
  .container-small {
    @apply px-0;
  }
}

.tabs-parent {
  @apply flex justify-center mt-8 pb-8;
}

.skill-charts {
  @apply grid gap-8 px-0;
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
    @apply text-slate-500;
    
    p.title {
      @apply font-medium mb-4 text-lg text-teal-900;
    }

    p {
      @apply mb-4 block;
    }

    span {
      @apply text-slate-500;
    }
  }
}
</style>