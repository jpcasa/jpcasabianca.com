<script setup>
import { NModal } from 'naive-ui'
import moment from 'moment'

import { useMenusStore } from '~/stores/menus'

const menusStore = useMenusStore()
const showModal = ref(false)

// get current year
const currentYear = moment().format('YYYY')
</script>

<template lang="pug">
footer
  .footer-top
    .container-4
      .left
        p Want to get in touch?
        span Just click on the button on the right and shoot me any questions you have
      .right
        Button(size="md" @click="showModal = true") Contact Me
  .footer-bottom
    .container-4
      .main
        router-link.logo-link(to="/")
          Logo(width="w-48")
        p Hey, I’m JP. An experienced UI/UX Designer and Engineer based in Bogotá, Colombia. Working Remotely EST Timezone.
      .menus
        .menu(v-for="(menu, i) in menusStore.allMenus" :key="i")
          p.menu-title {{ menu.title }}
          .menu-item(v-for="(item, j) in menu.items" :key="j")
            router-link(v-if="item.local" :to="item.link") {{ item.name }}
            a(v-else :href="item.link" target="_blank") {{ item.name }}
  .footer-copyright
    .container-4
      p © {{ currentYear }} JP Casabianca. All rights reserved.
n-modal(v-model:show="showModal")
  Card(padding="p-16" max-width="max-w-xl")
    Contact
</template>

<style lang="scss" scoped>
.footer-top {
  @apply bg-slate-100 border-t border-b border-slate-200 py-12 text-center md:text-left;

  .container-4 {
    @screen md {
      @apply flex items-center;
    }
  }

  .left {
    @apply flex-auto;

    p {
      @apply text-xl font-semibold text-teal-900 mb-3;
    }

    span {
      @apply text-slate-500 block mb-6 md:mb-0;
    }
  }
}

.footer-copyright {
  @apply border-t border-slate-200 py-4 text-center text-slate-500;
}

.footer-bottom {
  @apply pb-12 pt-16;

  .container-4 {
    @screen lg {
      @apply flex;

      .main {
        @apply flex-none w-64 pr-16 text-left;
      }
    }

    .menus {
      @apply grid grid-cols-3 gap-4;

      @screen lg {
        @apply flex-auto ml-16;
      }
    }
  }

  .menus {
    @apply mt-6 mb-12 lg:mt-0;
  }

  .menu-title {
    @apply text-sm text-slate-500 mb-4 mt-2 text-center lg:text-left;
  }

  .menu-item {
    @apply text-sm text-slate-400 mb-2 text-center lg:text-left;

    a {
      @apply text-slate-900;

      &:hover {
        @apply text-teal-600 underline;
      }
    }
  }

  .logo-link {
    @apply mx-auto text-center;
  }

  .main {
    @apply text-center flex flex-col items-center lg:items-start;
    
    img {
      @apply w-32;
    }
    
    p {
      @apply text-slate-500 mt-4;
    }
  }
}
</style>