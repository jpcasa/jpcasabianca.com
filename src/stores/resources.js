import { defineStore } from 'pinia'

export const useResourcesStore = defineStore({
  id: 'resources',
  state: () => ({
    resourcesFilter: { label: 'Design & Research', value: 'design' },
    resourcesFilters: [
      { label: 'View All', value: 'all' },
      { label: 'Design & Research', value: 'design' },
      { label: 'Product & Engineering', value: 'engineering' },
      { label: 'Productivity', value: 'productivity' },
      { label: 'Marketing & Analytics', value: 'marketing' },
    ],
    resources: {
      design: [
        {
          name: 'Figma',
          icon: '/img/icons/figma.png',
          url: 'https://www.figma.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Adobe Illustrator',
          icon: '/img/icons/illustrator.png',
          url: 'https://www.adobe.com/products/illustrator.html',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Framer',
          icon: '/img/icons/framer.png',
          url: 'https://www.framer.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Adobe Photoshop',
          icon: '/img/icons/photoshop.png',
          url: 'https://www.adobe.com/products/photoshop.html',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Adobe XD',
          icon: '/img/icons/adobe-xd.png',
          url: 'https://www.adobe.com/products/xd.html',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Adobe After Effects',
          icon: '/img/icons/after-effects.png',
          url: 'https://www.adobe.com/products/aftereffects.html',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Dribbble',
          icon: '/img/icons/dribbble.png',
          url: 'https://dribbble.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Pinterest',
          icon: '/img/icons/pinterest.png',
          url: 'https://www.pinterest.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Invision',
          icon: '/img/icons/invision.png',
          url: 'https://www.invisionapp.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Behance',
          icon: '/img/icons/behance.png',
          url: 'https://www.behance.net/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Sketch',
          icon: '/img/icons/sketch.png',
          url: 'https://www.sketch.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Abduzeedo',
          icon: '/img/icons/abduzeedo.png',
          url: 'https://abduzeedo.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Very Good Emails',
          icon: '/img/icons/very-good-emails.png',
          url: 'https://verygoodemails.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Awwwards',
          icon: '/img/icons/awwwards.png',
          url: 'https://www.awwwards.com/',
          horizontal: true,
          description: 'Really short description of this product and why I use it everyday.'          
        },
        {
          name: 'typewolf',
          icon: '/img/icons/typewolf.png',
          url: 'https://www.typewolf.com/',
          horizontal: true,
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Creative Market',
          icon: '/img/icons/creative-market.png',
          url: 'https://creativemarket.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Freebiesbug',
          icon: '/img/icons/freebiesbug.png',
          url: 'https://freebiesbug.com/',
          horizontal: true,
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'ThemeForest',
          icon: '/img/icons/themeforest.png',
          url: 'https://themeforest.net/',
          horizontal: true,
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Google Fonts',
          icon: '/img/icons/google-fonts.png',
          url: 'https://fonts.google.com/',
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Coolors',
          icon: '/img/icons/coolors.png',
          url: 'https://coolors.co/',
          horizontal: true,
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Pantone',
          icon: '/img/icons/pantone.png',
          url: 'https://www.pantone.com/',
          horizontal: true,
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'GoodUX',
          icon: '/img/icons/goodux.png',
          url: 'https://goodui.org/',
          horizontal: true,
          description: 'Really short description of this product and why I use it everyday.'
        },
        {
          name: 'Designspiration',
          icon: '/img/icons/designspiration.png',
          url: 'https://www.designspiration.net/',
          horizontal: true,
          description: 'Really short description of this product and why I use it everyday.'
        }
      ]
    },
  }),
  getters: {
    activeResources: state => {
      if (state.resourcesFilter.value == 'all') {
        return [
          ...state.resources.design
        ]
      }
      return state.resources[state.resourcesFilter.value]
    }
  },
  actions: {
    setResourcesFilter(filter) {
      this.resourcesFilter = filter
    }
  }
})