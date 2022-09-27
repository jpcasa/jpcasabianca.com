<script setup>
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
    default: [
      { label: 'Design', type: 'blue' },
      { label: 'Frontend', type: 'purple' }
    ]
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
      Tag(
        v-for="(tag, i) in tags"
        :key="i"
        :type="tag.type"
      ) {{ tag.label }}
  .summary
    p {{ summary }}
  .bottom
    .bottom-item
      i.uil.uil-location-point
      p {{ location }}
    .bottom-item
      i.uil.uil-calendar-alt
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
      @apply flex-auto flex items-center;

      p {
        @apply text-teal-900 font-medium;
      }

      span {
        @apply text-slate-500 ml-1;
      }
    }

    .tags {
      @apply flex-none flex items-center;

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
    }
  }

  .bottom {
    @apply flex items-center;

    .bottom-item {
      @apply flex items-center mr-4;

      i {
        @apply text-teal-900 text-lg leading-none mr-1;
      }

      p {
        @apply text-slate-400 text-sm;
      }

      &:last-of-type {
        @apply mr-0;
      }
    }
  }
}
</style>