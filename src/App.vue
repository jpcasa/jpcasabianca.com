<script setup>
import { useMeta } from 'vue-meta'

const siteName = 'JP Casabianca | Senior Designer and Developer | Remote EST'
useMeta({
  title: '',
  htmlAttrs: { lang: 'en', amp: true },
  meta: [
    { name: 'og:title', content: 'JP Casabianca | Senior Designer and Developer | Remote EST' },
    { name: 'description', content: 'Hey, I\'m JP. An experienced UI/UX Designer and Engineer. I can build full prototypes in Figma/Framer designed from scratch. Also, I can code them in Vue3/React and Vite.js, so I really bring value to product teams. I love new challenges and gravel cycling!' },
    { name: 'og:description', content: 'Hey, I\'m JP. An experienced UI/UX Designer and Engineer. I can build full prototypes in Figma/Framer designed from scratch. Also, I can code them in Vue3/React and Vite.js, so I really bring value to product teams. I love new challenges and gravel cycling!' },
    { name: 'og:type', content: 'website.portfolio' },
    { name: 'keywords', content: 'JP Casabianca, Casabianca, Remote Dev Colombia, Remote Dev Vue EST, Designer, Frontend, UX, Engineer, Figma' },
    { name: 'image', content: 'https://res.cloudinary.com/dpifbvbai/image/upload/v1664483318/user.png' },
    { name: 'og:site_name', content: 'JP Casabianca\'s Portfolio' },
    { name: 'og:url', content: 'https://www.jpcasabianca.com' },
    { property: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<template lang="pug">
div
  metainfo
    template(v-slot:title='{ content }')
      | {{ content ? `${content} | ${siteName}` : siteName }}
  router-view
</template>

<style scoped></style>
