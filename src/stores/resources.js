import { defineStore } from 'pinia'

export const useResourcesStore = defineStore({
  id: 'resources',
  state: () => ({
    resourcesFilter: { label: 'Product & Engineering', value: 'engineering' },
    resourcesFilters: [
      { label: 'View All', value: 'all' },
      { label: 'Design & Research', value: 'design' },
      { label: 'Product & Engineering', value: 'engineering' },
      { label: 'Productivity', value: 'productivity' },
      { label: 'Marketing & Analytics', value: 'marketing' },
    ],
    resourcess: [
      // design
      {
        name: 'Figma',
        icon: '/img/icons/figma.webp',
        url: 'https://www.figma.com/',
        subject: 'design',
        description: 'A design tool created for Web/App development'
      },
      {
        name: 'Adobe Illustrator',
        icon: '/img/icons/illustrator.webp',
        url: 'https://www.adobe.com/products/illustrator.html',
        subject: 'design',
        description: 'The most complete design tool I\'ve ever used'
      },
      {
        name: 'Adobe Photoshop',
        icon: '/img/icons/photoshop.webp',
        url: 'https://www.adobe.com/products/photoshop.html',
        subject: 'design',
        description: 'Perfect for photo editing and creating mockups'
      },
      {
        name: 'Framer',
        icon: '/img/icons/framer.webp',
        url: 'https://www.framer.com/',
        subject: 'design',
        description: 'A design tool created for Web/App development'
      },
      {
        name: 'Adobe XD',
        icon: '/img/icons/adobe-xd.webp',
        url: 'https://www.adobe.com/products/xd.html',
        subject: 'design',
        description: 'A lightweight version of Illustrator'
      },
      {
        name: 'After Effects',
        icon: '/img/icons/after-effects.webp',
        url: 'https://www.adobe.com/products/aftereffects.html',
        subject: 'design',
        description: 'Perfect for creating animations'
      },
      {
        name: 'Dribbble',
        icon: '/img/icons/dribbble.webp',
        url: 'https://dribbble.com/',
        subject: 'design',
        description: 'A community of designers sharing their work'
      },
      {
        name: 'Pinterest',
        icon: '/img/icons/pinterest.webp',
        url: 'https://www.pinterest.com/',
        subject: 'design',
        description: 'A community of designers sharing their work'
      },
      {
        name: 'Invision',
        icon: '/img/icons/invision.webp',
        url: 'https://www.invisionapp.com/',
        subject: 'design',
        description: 'A design tool created for Web/App development'
      },
      {
        name: 'Behance',
        icon: '/img/icons/behance.webp',
        url: 'https://www.behance.net/',
        subject: 'design',
        description: 'A community of designers sharing their work'
      },
      {
        name: 'Sketch',
        icon: '/img/icons/sketch.webp',
        url: 'https://www.sketch.com/',
        subject: 'design',
        description: 'A design tool created for Web/App development'
      },
      {
        name: 'Abduzeedo',
        icon: '/img/icons/abduzeedo.webp',
        url: 'https://abduzeedo.com/',
        subject: 'design',
        description: 'A great website to learn about design'
      },
      {
        name: 'Very Good Emails',
        icon: '/img/icons/very-good-emails.webp',
        url: 'https://www.verygoodemails.com/',
        subject: 'design',
        description: 'A great website to find email inspiration'
      },
      {
        name: 'B Pando',
        icon: '/img/icons/b-pando.png',
        url: 'https://www.bpando.org/',
        subject: 'design',
        description: 'A great website to find brand identity inspiration'
      },
      {
        name: 'Awwwards',
        icon: '/img/icons/awwwards.webp',
        url: 'https://www.awwwards.com/',
        subject: 'design',
        description: 'A great website to find website inspiration',
        horizontal: true
      },
      {
        name: 'Typewolf',
        icon: '/img/icons/typewolf.webp',
        url: 'https://www.typewolf.com/',
        subject: 'design',
        description: 'A great website to find font inspiration',
        horizontal: true
      },
      {
        name: 'Creative Market',
        icon: '/img/icons/creative-market.webp',
        url: 'https://creativemarket.com/',
        subject: 'design',
        description: 'A great website to find design assets'
      },
      {
        name: 'Freebiesbug',
        icon: '/img/icons/freebiesbug.webp',
        url: 'https://freebiesbug.com/',
        subject: 'design',
        description: 'A great website to find design assets',
        horizontal: true
      },
      {
        name: 'Unsplash',
        icon: '/img/icons/unsplash.png',
        url: 'https://unsplash.com/',
        subject: 'design',
        description: 'A great website to find free stock photos',
        horizontal: true
      },
      {
        name: 'Theme Forest',
        icon: '/img/icons/themeforest.webp',
        url: 'https://themeforest.net/',
        subject: 'design',
        description: 'A great website to find design assets',
        horizontal: true
      },
      {
        name: 'Google Fonts',
        icon: '/img/icons/google-fonts.webp',
        url: 'https://fonts.google.com/',
        subject: 'design',
        description: 'A great website to find free fonts'
      },
      {
        name: 'Coolors',
        icon: '/img/icons/coolors.webp',
        url: 'https://coolors.co/',
        subject: 'design',
        description: 'A great website to find color palettes',
        horizontal: true
      },
      {
        name: 'Pantone',
        icon: '/img/icons/pantone.webp',
        url: 'https://www.pantone.com/',
        subject: 'design',
        description: 'The leading color experts in the world',
        horizontal: true
      },
      {
        name: 'GoodUX',
        icon: '/img/icons/goodux.webp',
        url: 'https://goodux.io/',
        subject: 'design',
        description: 'A great website to find design inspiration',
        horizontal: true
      },
      {
        name: 'Designspiration',
        icon: '/img/icons/designspiration.webp',
        url: 'https://www.designspiration.com/',
        subject: 'design',
        description: 'A great website to find design inspiration',
        horizontal: true
      },

      // engineering
      {
        name: 'Visual Studio Code',
        icon: '/img/icons/vs-code.webp',
        url: 'https://code.visualstudio.com/',
        subject: 'engineering',
        description: 'A great code editor'
      },
      {
        name: 'Atom Studio',
        icon: '/img/icons/atom.webp',
        url: 'https://atom.io/',
        subject: 'engineering',
        description: 'Another great code editor made by Github'
      },
      {
        name: 'iTerm 2',
        icon: '/img/icons/iterm.webp',
        url: 'https://iterm2.com/',
        subject: 'engineering',
        description: 'A great terminal for MacOS'
      },
      {
        name: 'Postman',
        icon: '/img/icons/postman.webp',
        url: 'https://www.postman.com/',
        subject: 'engineering',
        description: 'A great tool for API development'
      },
      {
        name: 'Github',
        icon: '/img/icons/github.webp',
        url: 'https://www.github.com',
        subject: 'engineering',
        description: 'The main tool for version control'
      },
      {
        name: 'Digital Ocean',
        icon: '/img/icons/digital-ocean.webp',
        url: 'https://www.digitalocean.com/',
        subject: 'engineering',
        description: 'A modern tool for hosting'
      },
      {
        name: 'Netlify',
        icon: '/img/icons/netlify.webp',
        url: 'https://www.netlify.com/',
        subject: 'engineering',
        description: 'A modern tool for JamStack Deployments'
      },
      {
        name: 'Heroku',
        icon: '/img/icons/heroku.webp',
        url: 'https://www.heroku.com/',
        subject: 'engineering',
        description: 'A modern tool for hosting'
      },
      {
        name: 'Cloudinary',
        icon: '/img/icons/cloudinary.webp',
        url: 'https://cloudinary.com/',
        subject: 'engineering',
        description: 'A very use tool for image hosting'
      },
      {
        name: 'Naive UI',
        icon: '/img/icons/naive-ui.webp',
        url: 'https://www.naiveui.com/',
        subject: 'engineering',
        description: 'A great UI library for Vue 3'
      },
      {
        name: 'Tailwind',
        icon: '/img/icons/tailwind.webp',
        url: 'https://tailwindcss.com/',
        subject: 'engineering',
        description: 'A great CSS framework'
      },
      {
        name: 'Zapier',
        icon: '/img/icons/zapier.webp',
        url: 'https://zapier.com/',
        subject: 'engineering',
        description: 'A great tool for automation'
      },
      {
        name: 'Copy.ai',
        icon: '/img/icons/copy-ai.webp',
        url: 'https://www.copy.ai/',
        subject: 'engineering',
        description: 'An AI tool for copywriting',
        horizontal: true
      },
      {
        name: 'AWS',
        icon: '/img/icons/aws.webp',
        url: 'https://aws.amazon.com/',
        subject: 'engineering',
        description: 'THE tool for hosting'
      },
      {
        name: 'Font Squirrel',
        icon: '/img/icons/font-squirrel.webp',
        url: 'https://www.fontsquirrel.com/',
        subject: 'engineering',
        description: 'A great website to find free fonts'
      },
      {
        name: 'Contentful',
        icon: '/img/icons/contentful.webp',
        url: 'https://www.contentful.com/',
        subject: 'engineering',
        description: 'A great headless CMS'
      },
      {
        name: 'Strapi',
        icon: '/img/icons/strapi.webp',
        url: 'https://strapi.io/',
        subject: 'engineering',
        description: 'A great open-source headless CMS'
      },
      {
        name: 'GetTerms',
        icon: '/img/icons/getterms.webp',
        url: 'https://getterms.io/',
        subject: 'engineering',
        description: 'A great tool for generating terms and conditions',
        horizontal: true
      },
      {
        name: 'NameCheap',
        icon: '/img/icons/namecheap.webp',
        url: 'https://www.namecheap.com/',
        subject: 'engineering',
        description: 'A great tool for buying domains',
        horizontal: true
      },
      {
        name: 'Circle CI',
        icon: '/img/icons/circleci.webp',
        url: 'https://circleci.com/',
        subject: 'engineering',
        description: 'A great tool for CI/CD',
        horizontal: true
      },
      {
        name: 'Vercel',
        icon: '/img/icons/vercel.png',
        url: 'https://vercel.com/',
        subject: 'engineering',
        description: 'A great tool for JamStack Deployments',
      },
      {
        name: 'CSS Studio',
        icon: '/img/icons/css-studio.png',
        url: 'https://cssstudio.io/',
        subject: 'engineering',
        description: 'A great tool for CSS',
      },
      {
        name: 'a11ymatters',
        icon: '/img/icons/a11ymatters.webp',
        url: 'https://www.a11ymatters.com/',
        subject: 'engineering',
        description: 'A great tool for accessibility',
      },
      {
        name: 'ScrapingBee',
        icon: '/img/icons/srapingbee.webp',
        url: 'https://www.scrapingbee.com/',
        subject: 'engineering',
        description: 'A great tool for web scraping',
      },
      {
        name: 'Code Sandbox',
        icon: '/img/icons/codesandbox.webp',
        url: 'https://codesandbox.io/',
        subject: 'engineering',
        description: 'A great tool for coding in the browser',
        horizontal: true
      },
      {
        name: 'React Dev Tools',
        icon: '/img/icons/react devtoo.webp',
        url: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
        subject: 'engineering',
        description: 'A great tool for debugging React',
      },
      {
        name: 'Vue Dev Tools',
        icon: '/img/icons/vue-devtools.webp',
        url: 'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd',
        subject: 'engineering',
        description: 'A great tool for debugging Vue',
      },
      {
        name: 'ColorSpace',
        icon: '/img/icons/colorspace.webp',
        url: 'https://mycolor.space/',
        subject: 'engineering',
        description: 'A great tool for color palettes',
      },
      {
        name: 'LambaTest',
        icon: '/img/icons/lambatest.webp',
        url: 'https://www.lambdatest.com/',
        subject: 'engineering',
        description: 'A great tool for cross-browser testing',
        horizontal: true
      },
      {
        name: 'Treehouse',
        icon: '/img/icons/treehouse.webp',
        url: 'https://teamtreehouse.com/',
        subject: 'engineering',
        description: 'A great tool for learning to code',
      },
      {
        name: 'Pluralsight',
        icon: '/img/icons/pluralsight.webp',
        url: 'https://www.pluralsight.com/',
        subject: 'engineering',
        description: 'A great tool for learning to code',
      },
      {
        name: 'Storybook',
        icon: '/img/icons/storybiok.webp',
        url: 'https://storybook.js.org/',
        subject: 'engineering',
        description: 'A great tool for building UI components',
      },

      // productivity
      {
        name: "Stack Browser",
        url: "https://stackbrowser.com/",
        icon: "/img/icons/productivity/App Logos Transparent.png",
        subject: "productivity",
        description: "A modern browser for productivity"
      },
      {
        name: "Firefox Developer Edition",
        url: "https://www.mozilla.org/en-US/firefox/developer/",
        icon: "/img/icons/productivity/App Logos Transparent-2.png",
        subject: "productivity",
        description: "A great browser for developers"
      },
      {
        name: "Notion",
        url: "https://www.notion.so/",
        icon: "/img/icons/productivity/App Logos Transparent-3.png",
        subject: "productivity",
        description: "A great tool for productivity"
      },
      {
        name: "Slack",
        url: "https://slack.com/",
        icon: "/img/icons/productivity/App Logos Transparent-1.png",
        subject: "productivity",
        description: "A great tool for team communication"
      },
      {
        name: "Krisp.ai",
        url: "https://krisp.ai/",
        icon: "/img/icons/productivity/App Logos Transparent-5.png",
        subject: "productivity",
        description: "A great tool for noise cancellation"
      },
      {
        name: "Medium",
        url: "https://medium.com/",
        icon: "/img/icons/productivity/App Logos Transparent-7.png",
        subject: "productivity",
        description: "A great tool for reading and learning"
      },
      {
        name: "Surfshark",
        url: "https://surfshark.com/",
        icon: "/img/icons/productivity/App Logos Transparent-4.png",
        subject: "productivity",
        description: "A cheap and effective VPN"
      },
      {
        name: "Mountain Duck",
        url: "https://mountainduck.io/",
        icon: "/img/icons/productivity/App Logos Transparent-6.png",
        subject: "productivity",
        description: "A great tool for mounting cloud storage"
      },
      {
        name: "Zoom",
        url: "https://zoom.us/",
        icon: "/img/icons/productivity/App Logos Transparent-9.png",
        subject: "productivity",
        description: "A great tool for video conferencing"
      },
      {
        name: "Todoist",
        url: "https://todoist.com/",
        icon: "/img/icons/productivity/App Logos Transparent-11.png",
        subject: "productivity",
        description: "A great tool for task management"
      },
      {
        name: "Trello",
        url: "https://trello.com/",
        icon: "/img/icons/productivity/App Logos Transparent-10.png",
        subject: "productivity",
        description: "A great tool for task management"
      },
      {
        name: "Google Drive",
        url: "https://drive.google.com/",
        icon: "/img/icons/google-drive.png",
        subject: "productivity",
        description: "A great tool for cloud storage"
      },
      {
        name: "Evernote",
        url: "https://evernote.com/",
        icon: "/img/icons/productivity/App Logos Transparent-8.png",
        subject: "productivity",
        description: "A great tool for note taking"
      },
      {
        name: "CloudApp",
        url: "https://www.getcloudapp.com/",
        icon: "/img/icons/productivity/App Logos Transparent-13.png",
        subject: "productivity",
        description: "A great tool for screen recording"
      },
      {
        name: "Grammarly",
        url: "https://www.grammarly.com/",
        icon: "/img/icons/productivity/App Logos Transparent-23.png",
        subject: "productivity",
        description: "A great tool spell checking"
      },
      {
        name: "Loom",
        url: "https://www.loom.com/",
        icon: "/img/icons/productivity/App Logos Transparent-15.png",
        subject: "productivity",
        description: "A great tool for screen recording"
      },
      {
        name: "Asana",
        url: "https://asana.com/",
        icon: "/img/icons/productivity/App Logos Transparent-14.png",
        subject: "productivity",
        description: "A great tool for task management"
      },
      {
        name: "Basecamp",
        url: "https://basecamp.com/",
        icon: "/img/icons/productivity/App Logos Transparent-12.png",
        subject: "productivity",
        description: "A great tool for task management"
      },
      {
        name: "Numi",
        url: "https://numi.io/",
        icon: "/img/icons/productivity/App Logos Transparent-17.png",
        subject: "productivity",
        description: "A great tool for calculations"
      },
      {
        name: "Feedly",
        url: "https://feedly.com/",
        icon: "/img/icons/productivity/App Logos Transparent-19.png",
        subject: "productivity",
        description: "A great tool for reading and learning"
      },
      {
        name: "Product Hunt",
        url: "https://www.producthunt.com/",
        icon: "/img/icons/productivity/App Logos Transparent-16.png",
        subject: "productivity",
        description: "A great tool for reading and learning"
      },
      {
        name: "Cloudinary",
        url: "https://cloudinary.com/",
        icon: "/img/icons/productivity/App Logos Transparent-18.png",
        subject: "productivity",
        description: "A great tool for image management"
      },
      {
        name: "Whereby",
        url: "https://whereby.com/",
        icon: "/img/icons/productivity/App Logos Transparent-21.png",
        subject: "productivity",
        description: "A great tool for video conferencing",
        horizontal: true
      },
      {
        name: "Font Ninja",
        url: "https://fontninja.io/",
        icon: "/img/icons/productivity/App Logos Transparent-20.png",
        subject: "productivity",
        description: "A great tool for font management"
      },
      {
        name: "ColorZilla",
        url: "https://www.colorzilla.com/",
        icon: "/img/icons/productivity/App Logos Transparent-22.png",
        subject: "productivity",
        description: "A great tool for color management"
      },

      // marketing
      {
        name: 'Buffer',
        url: 'https://buffer.com/',
        icon: '/img/icons/marketing/App Logos Transparent-16.png',
        subject: 'marketing',
        description: 'A great tool for social media management'
      },
      {
        name: 'Mailjet',
        url: 'https://www.mailjet.com/',
        icon: '/img/icons/marketing/App Logos Transparent-20.png',
        subject: 'marketing',
        description: 'A great tool for email marketing',
        horizontal: true
      },
      {
        name: 'ActiveCampaign',
        url: 'https://www.activecampaign.com/',
        icon: '/img/icons/marketing/App Logos Transparent-22.png',
        subject: 'marketing',
        description: 'A great tool for email marketing',
        horizontal: true
      },
      {
        name: 'Heap',
        url: 'https://heap.io/',
        icon: '/img/icons/marketing/App Logos Transparent-18.png',
        subject: 'marketing',
        description: 'A great tool for analytics'
      },
      {
        name: 'Mailchimp',
        url: 'https://mailchimp.com/',
        icon: '/img/icons/marketing/App Logos Transparent-17.png',
        subject: 'marketing',
        description: 'A great tool for email marketing'
      },
      {
        name: 'Segment',
        url: 'https://segment.com/',
        icon: '/img/icons/marketing/App Logos Transparent-19.png',
        subject: 'marketing',
        description: 'A great tool for analytics'
      },
      {
        name: 'DataCamp',
        url: 'https://www.datacamp.com/',
        icon: '/img/icons/marketing/App Logos Transparent-23.png',
        subject: 'marketing',
        description: 'A great tool for learning'
      },
      {
        name: 'Hotjar',
        url: 'https://www.hotjar.com/',
        icon: '/img/icons/marketing/App Logos Transparent-19.png',
        subject: 'marketing',
        description: 'A great tool for analytics'
      },
      {
        name: 'Stripo Email',
        url: 'https://stripo.email/',
        icon: '/img/icons/marketing/App Logos Transparent-12.png',
        subject: 'marketing',
        description: 'A great tool for email marketing',
      },
      {
        name: 'Klaviyo',
        url: 'https://www.klaviyo.com/',
        icon: '/img/icons/marketing/App Logos Transparent-14.png',
        subject: 'marketing',
        description: 'A great tool for email marketing',
        horizontal: true
      },
      {
        name: 'Google Sheets',
        url: 'https://www.google.com/sheets/about/',
        icon: '/img/icons/marketing/App Logos Transparent-15.png',
        subject: 'marketing',
        description: 'A great tool for spreadsheets'
      },
      {
        name: 'Open Replay',
        url: 'https://openreplay.com/',
        icon: '/img/icons/marketing/App Logos Transparent-13.png',
        subject: 'marketing',
        description: 'A great tool for analytics',
        horizontal: true
      },
      {
        name: 'Google Analytics',
        url: 'https://analytics.google.com/analytics/web/',
        icon: '/img/icons/marketing/App Logos Transparent-4.png',
        subject: 'marketing',
        description: 'A great tool for analytics'
      },
      {
        name: 'FB Ads',
        url: 'https://www.facebook.com/business/ads',
        icon: '/img/icons/marketing/App Logos Transparent-6.png',
        subject: 'marketing',
        description: 'A great tool for advertising'
      },
      {
        name: 'Canva',
        url: 'https://www.canva.com/',
        icon: '/img/icons/marketing/App Logos Transparent-9.png',
        subject: 'marketing',
        description: 'A great tool for marketing design'
      },
      {
        name: 'Shopify',
        url: 'https://www.shopify.com/',
        icon: '/img/icons/marketing/App Logos Transparent-11.png',
        subject: 'marketing',
        description: 'A great tool for ecommerce'
      },
      {
        name: 'Stripe',
        url: 'https://stripe.com/',
        icon: '/img/icons/marketing/App Logos Transparent-7.png',
        subject: 'marketing',
        description: 'A great tool for payments'
      },
      {
        name: 'Mixpanel',
        url: 'https://mixpanel.com/',
        icon: '/img/icons/marketing/App Logos Transparent-2.png',
        subject: 'marketing',
        description: 'A great tool for analytics',
        horizontal: true
      },
      {
        name: 'Hubspot',
        url: 'https://www.hubspot.com/',
        icon: '/img/icons/marketing/App Logos Transparent-1.png',
        subject: 'marketing',
        description: 'A great tool for marketing',
      },
      {
        name: 'Sprout Social',
        url: 'https://sproutsocial.com/',
        icon: '/img/icons/marketing/App Logos Transparent-3.png',
        subject: 'marketing',
        description: 'A great tool for social media management'
      }
    ],
    resources: null
  }),
  getters: {
    activeResources: state => {
      if (state.resourcess) {
        if (state.resourcesFilter.value == 'all') {
          return state.resourcess
        }
        return state.resourcess.filter(item => item.subject == state.resourcesFilter.value)
      }
      return null
    }
  },
  actions: {
    setResourcesFilter(filter) {
      this.resourcesFilter = filter
    },
    setResources(resources) {
      this.resources = resources
    }
  }
})