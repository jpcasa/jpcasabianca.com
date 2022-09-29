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
        summary: 'Cycling Apparel & Accessories. Ecommerce store with a focus on product design and customer experience. I design collections, mantain the website, and supervise a team of 3 people.',
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
        summary: 'Full automation suite for Shopify. I lead the product design and development, and I\'m responsible for the overall product strategy. Sold Sales Pop in 2022 for a 6x multiple valuation. Currently working on 3 active apps including Amplified.io.',
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
        summary: 'Online digital and marketing agency based in Miami, FL. I worked on a variety of projects for clients such as the Wacom, Motorola, Microsoft, HP, and more. I was responsible for the design and development of digital assets and websites.',
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
        summary: '“La Ola Naranja” is a Non-profit and Media Channel created to investigate, promote and support Creative Industries, from public policies to the private sector. It has achieved milestones in Colombia such as the approval of the Orange Law, its inclusion in the development plan and the agreement of the Council of Bogotá. I\'m an advisor and mentor for the organization.',
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
        summary: 'Coolture Investments is an awesome Investment Hub that connects smart capital with unique opportunities in the industries of the future. I\'m an financial/technological advisor and panelist for the organization.',
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
        summary: 'Codesign was a digital agency based in Bogotá, Colombia. I was responsible for the design and development of digital assets and websites. I also managed the team and the overall business. We grew too fast and couldn\'t keep up with the demand, so we decided to close the business in 2017. Luckily, we were able to sell the company to a local agency and learn so much during the process.',
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
        summary: 'Graduated with a Business Undergraduate Degree from the Universidad de los Andes in Bogotá, Colombia (Top 3 Business Programs in LATAM Region). Did an emphasis in Finance and Technology. Paid my bills by working as a freelance designer and developer in the meantime.',
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
        summary: 'My first serious gig! I worked with a company incubator bases in Bogotá, Colombia. I was responsible for aiding and developing the websites of the companies in the incubator. I also worked on a few projects for external clients.',
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
        summary: '1 year internship in a Private Equity Fund based in Bogotá, Colombia. I was responsible for the financial analysis of the companies in the portfolio. I also ended up programming various assets and discovered my love for code.',
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