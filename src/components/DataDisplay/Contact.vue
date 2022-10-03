<script setup></script>

<template lang="pug">
.channels
  a.channel(
    href="mailto:hola@jpcasabianca.com"
    target="_blank"
  )
    img(src="/img/email.webp" alt="Email - JP Casabianca")
    p Email
    span Shoot me a message through email
  a.channel(
    href="https://api.whatsapp.com/send?phone=573028608427&text=Hello%2C%20I%27m%20interested%20in%20working%20with%20you..."
    target="_blank"
  )
    img(src="/img/whatsapp.webp" alt="WhatsApp - JP Casabianca")
    p WhatsApp
    span Send me a text message through WhatsApp
  a.channel(href="https://www.linkedin.com/in/juan-pablo-casabianca/" target="_blank")
    img(src="/img/linkedin.webp" alt="Linkedin - JP Casabianca")
    p Linkedin
    span Send me a direct message through Linkedin
  a.channel(href="https://www.instagram.com/jpcasabiancai/" target="_blank")
    img(src="/img/instagram.webp" alt="Instagram - JP Casabianca")
    p Instagram
    span Send me a direct message through Instagram
</template>

<style lang="scss" scoped>
.channels {
  @apply grid grid-cols-2 gap-6;

  .channel {
    @apply text-center border border-slate-200 rounded p-6;
    @apply cursor-pointer;
    
    img {
      @apply w-16 mx-auto;
    }

    p {
      @apply text-teal-900 font-medium text-base my-4;
    }

    span {
      @apply text-slate-500 test-sm;
    }

    &:hover {
      @apply border-teal-600;
    }
  }
}
</style>