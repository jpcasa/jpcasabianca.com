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
  }),
  getters: {
    menus: (state) => [...state.mainMenu],
  },
})