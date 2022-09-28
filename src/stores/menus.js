import { defineStore } from 'pinia'

export const useMenusStore = defineStore({
  id: 'menus',
  state: () => ({
    mainMenu: [
      {
        name: 'About Me',
        link: '/about',
        icon: 'uil-user',
        local: true,
      },
      {
        name: 'Work' ,
        link: '/work',
        icon: 'uil-briefcase-alt',
        local: true,
      },
      {
        name: 'Resources',
        link: '/resources',
        icon: 'uil-cloud-computing',
        local: true,
      },
      {
        name: 'Play',
        link: 'https://www.instagram.com/jpcasabiancai/',
        icon: 'uil-instagram',
        local: false,
      },
      {
        name: 'Blog',
        link: '/blog',
        icon: 'uil-book-alt',
        local: true,
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
        link: '/cv',
        local: true,
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