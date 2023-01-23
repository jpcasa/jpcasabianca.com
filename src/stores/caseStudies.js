// create pinia store case study
import { defineStore } from 'pinia'

export const useCaseStudyStore = defineStore({
  id: 'caseStudy',
  state: () => ({
    caseStudy: null,
    caseStudies: {
      'casabianca-cycling': {
        name: 'Casabianca Cycling',
        logo: '/img/casabianca-logo.webp',
        description: 'Exploring a unique opportunity in Colombia: Cycling. After picking up 5 years of expertise on ecommerce saas, I decided to open a Cycling and Atletic Apparel Store. I design every single product and made the online shop and admin from scratch. ',
        bg: '#F9FAFC',
        ctaColor: '#ffffff',
        ctaBg: '#00944F',
        ctaBgLight: '#E2FFF2',
        hasPrototype: true,
        mainItems: [
          {
            label: 'Product Design in Photoshop',
            copy: 'I design the cycling apparel in Photoshop with a great set of mockups. With this tool, we can really get a real sense of how the products will look like in real life.'
          },
          {
            label: 'Shop created with Vue.js',
            copy: 'No questions when choosing the framework and language. In this case, I used Nuxt.js and Vue to create a minimal and awesome online shop. '
          },
          {
            label: 'Using Database as a Service',
            copy: 'I\'m using Strapi for my Database as a service. Strapi is an open source Javascript framework that enables you to create APIs in seconds.'
          }
        ],
        sections: [
          {
            title: 'Using Photoshop to design the cycling apparel mockups',
            subtitle: 'Apparel Mockups',
            copy: 'Photoshop is a pain in the ass for everything except mockups! We love to use it to design our apparel though... We have a complete set of garments that really help us visualize the design before sending it to the printers and then sewing.',
            cta: 'Get in touch',
            img: '/img/case-studies/casabianca-1.webp',
            bg: '#F1F5F9',
          },
          {
            title: 'Vue.js, Nuxt, Tailwind, SASS, Express, Node.js',
            subtitle: 'Modern Jamstack',
            copy: 'Using full stack Javascript, I was able to create a great experience in a short amount of time. Node and Express are lightweight and perform amazing and I’m using Strapi for Database as a Service. Tailwind is a utlity-first CSS library that let’s me focus on speed and isn’t opinionated. Combined with SASS it makes the site look great.',
            cta: 'View repo on Github',
            img: '/img/case-studies/casabianca-code.webp',
            bg: '#ffffff',
          },
          {
            title: 'Pantone based color palette',
            subtitle: 'Keeping minimal but cool as fuck',
            copy: 'Simplicity is the ultimate sophistication, and no one does minimal better than Pantone. We try to keep our design as minimal as possible but giving them something new. The process has been really tough but really rewarding at the same time.',
            cta: 'View all available colors',
            img: '/img/case-studies/casabianca-pantones.webp',
            bg: '#F1F5F9',
          }
        ]
      }
    }
  }),
  actions: {
    setCaseStudy(slug) {
      if (this.caseStudies[slug]) this.caseStudy = this.caseStudies[slug]
    }
  }
})