import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#111727',
        },
        teal: {
          100: '#E2FFF2',
          200: '#BDFFE0',
          300: '#80FFC4',
          400: '#21FC96',
          500: '#0CDA7A',
          600: '#00944F',
          700: '#005353',
          800: '#003535',
          900: '#002323'
        },
        gray: {
          100: '#F9FAFC',
          200: '#F2F6FA',
          300: '#DCE6EE',
          400: '#ADB8C6',
          500: '#8795A1',
          600: '#464F5A'
        }
      }
    }
  }
})