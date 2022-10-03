import { defineStore } from 'pinia'

export const useExperienceStore = defineStore({
  id: 'experience',
  state: () => ({
    page: 1,
    itemsPerPage: 3,
    subjectFilters: [],
    caseStudies: null,
    experience: null,
    caseStudy: null,
  }),
  getters: {
    pages: state => Math.ceil(state.experience.length / state.itemsPerPage),
    experiences: state => {
      if (state.experience) {
        if (state.subjectFilters.length) {
          return state.experience.filter((item) => {
            return item.subjects.some((subject) => state.subjectFilters.includes(subject))
          })
        } else {
          const start = (state.page - 1) * state.itemsPerPage
          return state.experience.slice(start, start + state.itemsPerPage)
        }
      }
      return null
    },
    subjectFiltersString: state => {
      if (state.subjectFilters.length) {
        const subjects = state.subjectFilters.map(subject => subject.replace('-', ' '))
        return subjects.join(', ')
      }
      return null
    }
  },
  actions: {
    changePage(action) {
      if (action === 'next') {
        this.page++
      } else {
        this.page--
      }
    },
    toggleSubjectFilter(tag) {
      if (this.subjectFilters.includes(tag.value)) {
        this.subjectFilters = this.subjectFilters.filter(item => item !== tag.value)
      } else {
        this.subjectFilters.push(tag.value)
      }
    },
    clearFilters() {
      this.subjectFilters = []
    },
    setCaseStudies(results) {
      this.caseStudies = results
    },
    setExperience(results) {
      this.experience = results
    },
    setCaseStudy(result) {
      this.caseStudy = result
    }
  }
})