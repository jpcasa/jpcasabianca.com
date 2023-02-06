<script setup>
import { useApi } from '~/composables/api'
import { useGalleryStore } from '~/stores/gallery'
// import uil behance icon
import IconBehance from '~icons/uil/behance'
import IconDribbble from '~icons/uil/dribbble'

const { getGallery, loadingGallery } = useApi()
const galleryStore = useGalleryStore()

const loadGallery = async () => {
  const [error, response] = await getGallery()
  if (error) return
  galleryStore.setItems(response.data)
}

onMounted(() => loadGallery())
</script>

<template lang="pug">
.gallery-page
  PageHeader.gallery-header(align="center")
    .small-cont
      p 10+ years designing digital assets
      h1 Design Gallery
      span Check out this cool gallery of shots from some of my work & personal projects, art, tattoos, and more! I’ve always been really passionate about design & art, but also coding... That’s why I think web and graphic design fits me so well!
      Button(@click="showModal = true" type="primary" size="md") Let's Connect
      .social
        a(
          href="https://www.behance.net/jpcasabianca"
          target="_blank"
          class="behance"
        )
          icon-behance
        a(
          href="https://dribbble.com/jpcasabiancai"
          target="_blank"
          class="dribbble"
        )
          icon-dribbble
  .container
    .gallery-grid(v-if="!loadingGallery && galleryStore.items")
      a.gallery-item(
        v-for="item in galleryStore.items"
        :key="item.id"
        :style="{ backgroundImage: `url(${item.imgs.items[0]})` }"
        :href="item.imgs.items[0]"
        target="_blank"
      )
        p {{ item.title }}
    .loading(v-else)
      Spinner(:full-screen="false")
</template>

<style lang="scss" scoped>
.gallery-page {
  @apply mb-24;
}

.gallery-header {
  .small-cont {
    @apply max-w-2xl mx-auto;

    p {
      @apply text-teal-500 font-medium mb-3;
    }

    h1 {
      @apply text-white mb-6;
    }

    span {
      @apply text-slate-200 block mb-4;
    }
  }

  .social {
    @apply flex flex-wrap items-center justify-center mt-4 text-xl text-white;

    svg {
      &:first-of-type {
        @apply mr-1;
      }
    }
    .dribbble {
      &:hover {
        color: #EA4C89;
      }
    }

    .behance {
      &:hover {
        color: #0057FF;
      }
    }
  }
}

.gallery-grid {
  @apply grid gap-6 sm:grid-cols-2 lg:grid-cols-3;

  .gallery-item {
    @apply cursor-pointer rounded shadow-md bg-white bg-center bg-cover;
    @apply flex flex-col justify-end;
    height: 300px;

    @screen md {
      height: 220px;
    }

    @screen lg {
      height: 320px;
    }    

    p {
      @apply block bg-black px-6 py-3 rounded-b text-sm bg-opacity-25 hidden;
      @apply text-white font-medium;
      transition: 0.4s all;
    }

    &:hover {
      @apply shadow-lg;

      p {
        @apply flex;
      }
    }
  }
}

.loading {
  @apply bg-white rounded border border-slate-200;
}
</style>