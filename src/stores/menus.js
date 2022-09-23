import { defineStore } from 'pinia'

export const useMenusStore = defineStore({
  id: 'menus',
  state: () => ({
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
        link: '/blog',
        local: true,
      }
    ],
  }),
  getters: {
    menus: (state) => [...state.mainMenu],
  },
})