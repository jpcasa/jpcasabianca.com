import { defineStore } from 'pinia'

export const useTestimoniesStore = defineStore({
  id: 'testimonies',
  state: () => ({
    testimonies: [
      {
        testimony: 'I\'ve been working with JP for over a year now and he\'s been a great asset to our team. He\'s a good communicator, problem solver, and teammate. He\'s always willing to help out and is always looking for ways to improve. I\'m looking forward to working with him for many years to come.',
        person: 'Hugo Plazas',
        company: 'Cartkit',
        role: 'Senior Product Designer',
        rating: 5,
        image: '/img/hugo.webp'
      },
      {
        testimony: 'I\'ve known JP for years and I can honestly say he\'s one of the most talented designers and developers I\'ve ever worked with. He\'s a really determined person that always achieves his goals, and I admire that so much.',
        person: 'Daniel Loaiza',
        company: 'AB INBEV',
        role: 'Senior Sales Manager',
        rating: 5,
        image: '/img/loaiza.webp'
      },
      {
        testimony: 'JP is amazing because he understands all aspects of business. He can create a financial analysis from company cash flows to designing the company\'s logo. To me, he brings a ton of value and I always appreciate his opinion.',
        person: 'Juan Diego Ortiz',
        company: 'Coolture Investments',
        role: 'Founder & CEO',
        rating: 5,
        image: '/img/jd.webp'
      }
    ],
  }),
})