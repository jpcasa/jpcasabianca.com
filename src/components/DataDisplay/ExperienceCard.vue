<script setup>
import IconLocationPoint from '~icons/uil/location-point'
import IconCalendarAlt from '~icons/uil/calendar-alt'

defineProps({
  company: {
    type: String,
    default: 'Cartkit'
  },
  logo: {
    type: String,
    default: '/img/logos/cartkit.png'
  },
  role: {
    type: String,
    default: 'Product Lead'
  },
  startDate: {
    type: String,
    default: 'Sep 2018'
  },
  endDate: {
    type: String,
    default: 'Present'
  },
  tags: {
    type: Array,
    default: ['Design', 'Frontend']
  },
  summary: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  location: {
    type: String,
    default: 'Remote (EST)'
  }
})
</script>

<template lang="pug">
.experience-card
  .top
    img(:src="logo" alt="CartKit Logo - JP Casabianca")
    .title
      p {{ company }}
      span @ {{ role }}
    .tags
      .tag-cont(v-for="(tag, i) in tags" :key="i")
        Tag(randomize-type) {{ tag }}
  .summary
    p 
      | {{ summary }}
      //- span Read More
  .bottom
    .bottom-item
      icon-location-point
      p {{ location }}
    .bottom-item
      icon-calendar-alt
      p {{ startDate }} - {{ endDate }}
</template>

<style lang="scss" scoped>
.experience-card {
  .top {
    @apply flex items-center;

    img {
      @apply flex-none w-12 h-12 mr-3;
    }

    .title {
      @apply flex-auto;

      @screen lg {
        @apply flex items-center;
      }

      p {
        @apply text-teal-900 font-medium;
      }

      span {
        @apply text-slate-500 lg:ml-1;
      }
    }

    .tags {
      @apply flex-none grid gap-1 text-right;

      @screen md {
        @apply flex items-center;
      }

      .tag {
        @apply mr-1;

        &:last-of-type {
          @apply mr-0;
        }
      }
    }
  }

  .summary {
    @apply my-4;
    
    p {
      @apply text-slate-500;

      span {
        @apply ml-1 text-slate-800 underline font-medium cursor-pointer;

        &:hover {
          @apply text-teal-600;
        }
      }
    }
  }

  .bottom {
    @apply flex items-center;

    .bottom-item {
      @apply flex items-center mr-4;

      i {
        @apply text-teal-900 text-lg leading-none;
      }

      p {
        @apply text-slate-400 text-sm ml-1;
      }

      &:last-of-type {
        @apply mr-0;
      }
    }
  }
}
</style>