import { defineStore } from 'pinia'

import IconUser from '~icons/uil/user'
import IconBriefcaseAlt from '~icons/uil/briefcase-alt'
import IconCloudComputing from '~icons/uil/cloud-computing'
import IconInstagram from '~icons/uil/instagram'
import IconBookAlt from '~icons/uil/book-alt'
import IconLightbulbAlt from '~icons/uil/lightbulb-alt'

export const useMenusStore = defineStore({
  id: 'menus',
  state: () => ({
    mobileMenus: [
      [
        {
          name: 'About Me',
          link: '/about',
          icon: markRaw(IconUser),
        },
        {
          name: 'Work' ,
          link: '/work',
          icon: markRaw(IconBriefcaseAlt),
        },
        {
          name: 'Process',
          link: '/creative-process',
          icon: markRaw(IconLightbulbAlt),
        },
        {
          name: 'Resources',
          link: '/resources',
          icon: markRaw(IconCloudComputing),
        }
      ],
      [
        {
          name: 'Play',
          link: 'https://www.instagram.com/jpcasabiancai/',
          icon: markRaw(IconInstagram),
        },
        {
          name: 'Blog',
          link: 'https://medium.com/@jpc_774',
          icon: markRaw(IconBookAlt),
        }
      ]
    ],
    mainMenu: [
      {
        name: 'About Me',
        link: '/about',
        local: true,
      },
      {
        name: 'Work' ,
        link: '/work',
        local: true,
      },
      {
        name: 'Process',
        link: '/creative-process',
        local: true,
      },
      {
        name: 'Resources',
        link: '/resources',
        local: true,
      },
      {
        name: 'Play',
        link: 'https://www.instagram.com/jpcasabiancai/',
        local: false,
      },
      {
        name: 'Blog',
        link: 'https://medium.com/@jpc_774',
        local: false,
      }
    ],
    secondaryMenu: [
      {
        name: 'Home',
        link: '/about',
        local: true,
      },      
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/jpcasabiancai/',
        local: false,
      },
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/juan-pablo-casabianca/',
        local: false,
      },
      {
        name: 'Github',
        link: 'https://github.com/jpcasa',
        local: false,
      },
    ],
    moreMenu: [
      {
        name: 'CV',
        link: '/PDF/CV_2023.pdf',
        local: false,
      },
      {
        name: 'Privacy Policy',
        link: '/privacy-policy',
        local: true,
      },
      {
        name: 'Email Me',
        link: 'mailto:hola@jpcasabianca.com',
        local: false,
      },
      {
        name: 'WhatsApp',
        link: 'https://wa.me/573028608427',
        local: false,
      },
    ]
  }),
  getters: {
    allMenus: (state) => [
      { title: 'Main Menu', items: state.mainMenu },
      { title: 'Social', items: state.secondaryMenu },
      { title: 'More', items: state.moreMenu },
    ],
  },
})