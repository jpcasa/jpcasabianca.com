<script setup>
const arr = [
  'I create awesome digital experiences.',
  'I design prototypes in Figma.',
  'I use Vue 3 and Github Copilot to get shit done.',
  'I love Gravel and Road Cycling.',
  'I own a Sports Apparel Brand.',
  'I play Zelda and PS4.'
]
</script>

<template lang="pug">
.home-page
  .container
    .info
      .info-container
        h1
          | Hey, I’m JP. An experienced UI/UX Designer and Engineer.
          span
            VueWriter(:array="arr" :typeSpeed="70")
        p.copy I know how to design and code, so I really bring value to product teams. I love new challenges and gravel cycling! Most recently leading product over at Cartkit - Amplified.    
        Button(size="md" link="/about") Learn More About Me
    .img
      img(src="/img/home@2x.png" alt="Home JP Casabianca")
</template>

<style lang="scss" scoped>
.container {
  @apply grid gap-8;
  max-width: 100%;

  @screen md {
    @apply grid-cols-2 fixed w-full h-full inset-0 px-0;
  }

  .img {
    @apply bg-gray-200 py-12 flex items-center justify-center;

    img {
      @apply w-5/6 xl:w-3/4;
    }
  }

  .info {
    @apply text-center pt-32 mb-8 w-full;

    @screen lg {
      @apply max-w-md mx-auto text-left flex items-center pt-0;
    }

    h1 {
      @apply text-teal-900;

      span {
        @apply text-teal-600 underline;
      }      
    }

    .copy {
      @apply my-8 text-slate-500;
    }
  }
}
</style>