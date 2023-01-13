<script setup>
import IconLocationPoint from '~icons/uil/location-point'
import IconCalendarAlt from '~icons/uil/calendar-alt'

const showDrawer = ref(false)

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
  },
  completeSummary: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
})

const toggleDrawer = () => showDrawer.value = !showDrawer.value
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
      span(@click="toggleDrawer()") Read More
  .bottom
    .bottom-item
      icon-location-point
      p {{ location }}
    .bottom-item
      icon-calendar-alt
      p {{ startDate }} - {{ endDate }}
  Drawer(
    v-if="showDrawer"
    title="Experience Summary"
    @close="toggleDrawer"
  )
    .experience-card-large
      .tags
        .tag-cont(v-for="(tag, i) in tags" :key="i")
          Tag(randomize-type) {{ tag }}
      .top
        img(:src="logo" alt="CartKit Logo - JP Casabianca")
        .title
          p {{ company }}
          span @ {{ role }}
      .bottom
        .bottom-item
          IconLocationPoint
          p {{ location }}
        .bottom-item
          IconCalendarAlt
          p {{ startDate }} - {{ endDate }}
      .summary.html-section(v-html="completeSummary")
</template>

<style lang="scss" scoped>
.experience-card,
.experience-card-large {
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

.experience-card-large {
  .tags {
    @apply mb-4 flex items-center;    
  }

  .top {
    img {
      @apply w-20 h-20;
    }

    .title {
      @apply flex-col items-start justify-center;

      p {
        @apply text-lg;
      }

      span {
        @apply ml-0 text-base;
      }
    }
  }

  .bottom {
    @apply mt-4;
  }  
}
</style>