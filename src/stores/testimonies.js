import { defineStore } from 'pinia'

export const useTestimoniesStore = defineStore({
  id: 'testimonies',
  state: () => ({
    testimonies: [
      {
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        person: 'Hugo Plazas',
        company: 'Cartkit',
        role: 'Senior Product Designer',
        rating: 5,
        image: '/img/user.png'
      },
      {
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        person: 'Daniel Loaiza',
        company: 'AB INBEV',
        role: 'Senior Sales Manager',
        rating: 5,
        image: '/img/user.png'
      },
      {
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        person: 'Juan Diego Ortiz',
        company: 'Coolture Investments',
        role: 'Founder & CEO',
        rating: 5,
        image: '/img/user.png'
      }
    ],
  }),
})