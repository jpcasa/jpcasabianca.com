<script setup>
import { NSelect } from 'naive-ui'

import { useApi } from '~/composables/api'
import { useMetas } from '~/composables/metas'

import { useResourcesStore } from '~/stores/resources'

const { getResources, loading } = useApi()
const { setMetaTitle, metas } = useMetas()

const resourcesStore = useResourcesStore()

setMetaTitle('Resources')
useHead(metas)

const loadResources = async () => {
  const [error, response] = await getResources()
  if (error) {
    console.log(error)
    return
  }
  resourcesStore.setResources(response.data)
}

onMounted(() => {
  loadResources()
})
</script>

<template lang="pug">
.resources-page
  PageHeader(align="center")
    .small-cont
      p Let’s get some shit done!
      h1 Resources
      span Here's a list of resources that I usually use or recommend. Feel free to filter by category below!
  .container
    .filters
      .filters-mobile
        n-select(
          :options="resourcesStore.resourcesFilters"
          v-model:value="resourcesStore.resourcesFilter.value"
        )
      .filters-desktop
        .filters-menu
          .filter(
            v-for="(filter, i) in resourcesStore.resourcesFilters"
            :class="{ active: resourcesStore.resourcesFilter.value == filter.value }"
            :key="i"
            @click="resourcesStore.setResourcesFilter(filter)"
          )
            p {{ filter.label }}
        .filters-faqs
          CV
    .resources
      a.resource(
        v-for="(item, i) in resourcesStore.activeResources"
        target="_blank"
        :href="item.url"
        :key="i"
      )
        .resource-cont
          img.icon(
            :src="$filters.image(item.icon)"
            :alt="item.name"
            :class="{ horizontal: item.horizontal }"
          )
          p {{ item.name }}
          span {{ item.description }}
</template>

<style lang="scss" scoped>
.resources-page {
  @apply mb-24;

  .resources {
    @apply grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4;

    .resource {
      @apply bg-white rounded border border-slate-200 py-8 px-6;
      @apply flex items-center text-center cursor-pointer;

      &:hover {
        @apply border-teal-500;
      }

      img {
        @apply h-12 w-auto mx-auto;

        &.horizontal {
          @apply h-auto w-3/4;
        }
      }

      p {
        @apply text-teal-900 font-medium mt-2 mb-3;
      }

      span {
        @apply text-sm text-slate-500;
      }
    }
  }
  
  .small-cont {
    @apply max-w-2xl mx-auto;

    p {
      @apply text-teal-500 font-medium mb-3;
    }

    h1 {
      @apply text-white mb-6;
    }

    span {
      @apply text-slate-200;
    }
  }

  .container {
    @screen md {
      @apply flex;

      .filters {
        @apply flex-none w-64 mr-8;
      }
    }
  }
}

.filters {
  .filters-mobile {
    @apply md:hidden mb-4;
  }

  .filters-desktop {
    @apply hidden md:block;

    .filters-menu {
      @apply bg-white rounded border border-slate-200;
    }

    .filters-faqs {
      @apply mt-8;
    }

    .filter {
      @apply py-3 px-4 text-slate-500 text-sm cursor-pointer border border-white;

      &.active {
        @apply bg-teal-100 text-teal-600 border-teal-500;
      }

      &:hover {
        @apply text-teal-600;
      }

      &:first-of-type {
        @apply rounded-t;
      }

      &:last-of-type {
        @apply rounded-b;
      }
    }
  }
}
</style>