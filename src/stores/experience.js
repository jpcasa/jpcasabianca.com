import { defineStore } from 'pinia'

export const useExperienceStore = defineStore({
  id: 'experience',
  state: () => ({
    page: 1,
    itemsPerPage: 3,
    subjectFilters: [],
    caseStudies: null,
    experience: [
      {
        company: 'Casabianca.cc',
        logo: '/img/logos/casabianca.png',
        role: 'Founder & CEO',
        startDate: 'Dec 2019',
        endDate: 'Present',
        tags: [
          { label: 'Product Design', type: 'blue' },
          { label: 'Ecommerce', type: 'pink' },
        ],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'USA & International',
        subjects: ['design', 'frontend', 'backend', 'marketing', 'product'],
      },
      {
        company: 'Cartkit',
        logo: '/img/logos/cartkit.png',
        role: 'Product Lead',
        startDate: 'Sep 2018',
        endDate: 'Present',
        tags: [
          { label: 'Figma', type: 'blue' },
          { label: 'Vue', type: 'green' },
        ],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Remote (EST)',
        subjects: ['design', 'frontend', 'backend', 'customer-success']
      },
      {
        company: 'Rabinovici',
        logo: '/img/logos/rabinovici.png',
        role: 'UX Engineer',
        startDate: 'June 2017',
        endDate: 'Sep 2018',
        tags: [
          { label: 'React', type: 'blue-dark ' },
          { label: 'Python', type: 'pink' },
        ],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Remote (EST)',
        subjects: ['design', 'frontend', 'backend', 'marketing']
      },
      {
        company: 'Ola Naranja',
        logo: '/img/logos/ola-naranja.png',
        role: 'Advisor & Mentor',
        startDate: 'Jan 2017',
        endDate: 'Present',
        tags: [
          { label: 'Marketing', type: 'orange' },
          { label: 'Sales', type: 'purple' },
        ],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'LATAM Region',
        subjects: ['sales', 'business', 'marketing']
      },
      {
        company: 'Coolture Investments',
        logo: '/img/logos/coolture.png',
        role: 'Advisor & Panelist',
        startDate: 'Jan 2016',
        endDate: 'Present',
        tags: [
          { label: 'Investments', type: 'yellow' },
          { label: 'Venture Capital', type: 'green' },
        ],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'LATAM Region',
        subjects: ['sales', 'business', 'marketing']
      },
      {
        company: 'Codesign',
        logo: '/img/logos/codesign.png',
        role: 'Founder & CEO',
        startDate: 'Feb 2013',
        endDate: 'May 2017',
        tags: [
          { label: 'JQuery', type: 'blue' },
          { label: 'SASS', type: 'pink' },
          { label: 'HTML5', type: 'red' },
        ],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: ' Bogotá & Remote (EST)',
        subjects: ['design', 'frontend', 'backend', 'marketing', 'product', 'sales']
      },
      {
        company: 'Universidad de los Andes',
        logo: '/img/logos/uniandes.png',
        role: 'Business Degree',
        startDate: 'Aug 2010',
        endDate: 'Dec 2015',
        tags: [
          { label: 'Business', type: 'blue' },
          { label: 'Finance', type: 'green' },
          { label: 'Marketing', type: 'purple' },
        ],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Bogotá, Colombia',
        subjects: ['business', 'marketing', 'sales']
      },
      {
        company: 'Grupo Inspiro',
        logo: '/img/logos/grupo-inspiro.png',
        role: 'Full Stack Dev',
        startDate: 'Jan 2012',
        endDate: 'Nov 2013',
        tags: [
          { label: 'PHP', type: 'pink' },
          { label: 'MySQL', type: 'red' },
          { label: 'SASS', type: 'red' },
        ],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Bogotá',
        subjects: ['design', 'frontend', 'backend', 'marketing', 'product']
      },
      {
        company: 'Teka Capital',
        logo: '/img/logos/teka.png',
        role: 'Financial Analyst',
        startDate: 'Jan 2011',
        endDate: 'Dec 2011',
        tags: [
          { label: 'Excel', type: 'green' },
          { label: 'Finances', type: 'purple' },
        ],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Bogotá',
        subjects: ['business', 'marketing', 'sales']
      },
    ]
  }),
  getters: {
    pages: state => Math.ceil(state.experience.length / state.itemsPerPage),
    experiences: state => {
      if (state.subjectFilters.length) {
        return state.experience.filter((item) => {
          return item.subjects.some((subject) => state.subjectFilters.includes(subject))
        })
      } else {
        const start = (state.page - 1) * state.itemsPerPage
        return state.experience.slice(start, start + state.itemsPerPage)
      }
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
    }
  }
})