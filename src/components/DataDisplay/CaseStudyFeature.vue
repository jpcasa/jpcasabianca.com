<script setup>
defineProps({
  textPosition: {
    type: String,
    default: 'left',
  },
  grid: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  copy: {
    type: String,
    default: '',
  },
  cta: {
    type: String,
    default: '',
  },
  bg: {
    type: String,
    default: '#F9FAFC',
  },
  ctaColor: {
    type: String,
    default: '#ffffff',
  },
  ctaBg: {
    type: String,
    default: '#00944F',
  },
  flexDirection: {
    type: String,
    default: 'row',
  },
})
const emit = defineEmits(['clicked'])
const clickedCta = () => emit('clicked')
</script>

<template lang="pug">
.case-study-feature(:style="{ background: bg }" @click="clickedCta()")
  .container(:style="{ flexDirection }" :class="{ row: flexDirection != 'row' }")
    .text
      p.subtitle(:style="{ color: ctaBg }") {{ subtitle }}
      p.title {{ title }}
      span {{ copy }}
      button(:style="{ color: ctaColor, background: ctaBg }") {{ cta }}
    .img
      img(:src="img" :alt="`${title} | jpcasabianca.com`")
</template>

<style lang="scss" scoped>
.case-study-feature {
  .container {
    @apply py-16;

    @screen md {
      @apply flex flex-row;
    }

    .text,
    .img {
      @apply flex-1;
    }

    .text {
      @apply text-center mb-8;

      @screen md {
        @apply text-left mb-0 mr-12;
      }
      
      button {
        @apply px-6 py-3 rounded text-base;

        &:hover {
          @apply opacity-80;
        }
      }

      .subtitle {
        @apply text-base font-medium mb-4;
      }

      .title {
        @apply text-slate-900 text-2xl font-medium;
      }

      span {
        @apply block my-6 text-slate-500;
      }
    }
  }

  .container.row {
    .text {
      @screen md {
        @apply ml-12 mr-0;
      }
    }
  }
}
</style>