import { defineStore } from 'pinia'

export const useSkillsStore = defineStore({
  id: 'skills',
  state: () => ({
    softSkillsIndex: 0,
    softSkills: [
      {
        name: 'Problem-solving',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum.',
        level: 8,
      },
      {
        name: 'Communication skills',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum.',
        level: 9,
      },
      {
        name: 'Time management',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum.',
        level: 10,
      },
      {
        name: 'Interpersonal skills',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum.',
        level: 9,
      },
      {
        name: 'Self-awareness',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum.',
        level: 8,
      },
      {
        name: 'Self-learning',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum.',
        level: 10,
      },
      {
        name: 'Accountability',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum.',
        level: 10,
      },
      {
        name: 'Emotional Intelligence',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum.',
        level: 9,
      },
    ],
    skillActive: 'design',
    skills: [
      {
        title: 'Design',
        key: 'design',
        items: [
          { name: 'Figma', icon: 'figma', level: 10, },
          { name: 'Illustrator', icon: 'illustrator', level: 10 },
          { name: 'Photoshop', icon: 'photoshop', level: 8 },
          { name: 'Framer', icon: 'framer', level: 9 },
          { name: 'Invision', icon: 'invision', level: 9 },
          { name: 'Adobe XD', icon: 'adobe-xd', level: 6 },
          { name: 'Sketch', icon: 'sketch', level: 7 },
          { name: 'Dribbble', icon: 'dribbble', level: 10 },
          { name: 'Behance', icon: 'behance', level: 9 },
          { name: 'F-Squirrel', icon: 'font-squirrel', level: 9 },
          { name: 'Font Ninja', icon: 'font-ninja', level: 10 },
          { name: 'Pinterest', icon: 'pinterest', level: 10 },
        ]
      },
      {
        title: 'Frontend',
        key: 'frontend',
        items: [
          { name: 'Vue.js', icon: 'vue', level: 10 },
          { name: 'Vue 3', icon: 'vue-3', level: 9 },
          { name: 'Nuxt', icon: 'nuxt', level: 10 },
          { name: 'Vite.js', icon: 'vite', level: 9 },
          { name: 'React', icon: 'react', level: 6 },
          { name: 'Next.js', icon: 'next', level: 6 },
          { name: 'ES6', icon: 'javascript', level: 9 },
          { name: 'Pug', icon: 'pug', level: 10 },
          { name: 'SASS', icon: 'sass', level: 10 },
          { name: 'WindiCSS', icon: 'windi', level: 10 },
          { name: 'Tailwind', icon: 'tailwind', level: 10 },
          { name: 'Naive UI', icon: 'naive-ui', level: 10 },
        ]
      },
      {
        title: 'Backend / Dev Ops',
        key: 'backend',
        items: [
          { name: 'Node.js', icon: 'nodejs', level: 8, },
          { name: 'Express', icon: 'express', level: 9 },
          { name: 'Python', icon: 'python', level: 7 },
          { name: 'Django', icon: 'django', level: 7 },
          { name: 'Ruby', icon: 'ruby', level: 6 },
          { name: 'Rails', icon: 'rails', level: 6 },
          { name: 'AWS', icon: 'aws', level: 7 },
          { name: 'Strapi', icon: 'strapi', level: 10 },
          { name: 'Netlify', icon: 'netlify', level: 10 },
          { name: 'Heroku', icon: 'heroku', level: 9 },
          { name: 'D.Ocean', icon: 'digital-ocean', level: 9 },
          { name: 'Lamba', icon: 'lamba', level: 6 }
        ]
      },
      {
        title: 'Marketing',
        key: 'marketing',
        items: [
          { name: 'Analytics', icon: 'google-analytics', level: 8 },
          { name: 'Google Ads', icon: 'google-ads', level: 7 },
          { name: 'FB Ads', icon: 'fb-ads', level: 10 },
          { name: 'Mailjet', icon: 'mailjet', level: 10 },
          { name: 'Stripo', icon: 'stripo', level: 10 },
          { name: 'ActiveC', icon: 'activeC', level: 8 },
          { name: 'Mailchimp', icon: 'mailchimp', level: 9 },
          { name: 'Buffer', icon: 'buffer', level: 9 },
          { name: 'Heap', icon: 'heap', level: 7 },
          { name: 'Sprout', icon: 'sprout', level: 7 },
          { name: 'Hootsuite', icon: 'hootsuite', level: 9 },
          { name: 'Segment', icon: 'segment', level: 8 },
          { name: 'Hotjar', icon: 'hotjar', level: 10 }
        ]
      }
    ],
  }),
  getters: {
    activeSkills: state => {
      return state.skills.find(skill => skill.key === state.skillActive)
    },
    activeSoftSkill: state => {
      return state.softSkills[state.softSkillsIndex]
    },
    chartData: state => {
      const data = state.softSkills.map(skill => skill.level)
      const labels = state.softSkills.map(skill => skill.name)
      return {
        labels,
        datasets: [
          {
            data,
            backgroundColor: ['#E2FFF2BF'],
            borderColor: ['#08D777'],
            borderWidth: 3,
          },
        ]
      }
    }
  },
  actions: {
    changeSoftSkillsIndex(action) {
      if (action === 'next') {
        if (this.softSkillsIndex < this.softSkills.length - 1) {
          this.softSkillsIndex++
        } else {
          this.softSkillsIndex = 0
        }
      } else {
        if (this.softSkillsIndex > 0) {
          this.softSkillsIndex--
        } else {
          this.softSkillsIndex = this.softSkills.length - 1
        }
      }
    }
  }
})