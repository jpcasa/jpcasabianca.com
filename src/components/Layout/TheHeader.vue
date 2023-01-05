<script setup>
import { NModal } from 'naive-ui'

// import menus pinia store
import { useMenusStore } from '~/stores/menus'

const menusStore = useMenusStore()

const props = defineProps({
  mode: { type: String, default: 'light' }
})

const route = useRoute()

const windowScroll = ref(0)
const headerMode = ref(props.mode)
const withBg = ref(false)
const showModal = ref(false)

const buttonTypes = computed(() => {
  return headerMode.value === 'light' ? ['default', 'dark'] : ['secondary', 'primary']
})

const handleScroll = event => {
  windowScroll.value = window.scrollY
  if (windowScroll.value > 350) {
    headerMode.value = 'light'
    withBg.value = true
  } else {
    headerMode.value = props.mode
    withBg.value = false
  }
}

const linkActive = link => link == `/${route.path.split('/')[1]}`

onBeforeMount(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

<template lang="pug">
header(:class="[headerMode, { 'with-bg': withBg }]")
  .container
    .left
      router-link(to="/")
        Logo(:mode="headerMode")
    .center
      nav
        .nav-item(v-for="(item, i) in menusStore.mainMenu" :key="i")
          router-link(
            v-if="item.local"
            :to="item.link"
            :class="{ active: linkActive(item.link) }"
          ) {{ item.name }}
          a(v-if="!item.local" :href="item.link" target="_blank") {{ item.name }}
    .right
      Button(:type="buttonTypes[1]" @click="showModal = true") Let's Connect
.mobile-nav-bottom
  router-link.mobile-nav-item(
    v-for="(item, i) in menusStore.mobileMenus[0]"
    :to="item.link"
    :key="i"
  )
    component(:is="item.icon")
    span {{ item.name }}
  a.mobile-nav-item(
    v-for="(item, i) in menusStore.mobileMenus[1]"
    :href="item.link"
    :key="i"
    target="_blank"
  )
    component(:is="item.icon")
    span {{ item.name }}
  n-modal(v-model:show="showModal")
    Card(max-width="max-w-xl")
      Contact
</template>

<style lang="scss" scoped>
header {
  @apply h-14 fixed w-full top-0 inset-x-0 z-10;
  transition: 0.4s all;

  .container {
    @apply flex items-center h-full;
  }

  .card {
    @apply mx-12;
  }

  .left,
  .right {
    @apply lg:w-64;
  }

  .left {
    @apply flex-auto lg:flex-none flex items-center;

    .logo {
      @apply w-36 sm:w-42;

      &:hover {
        @apply opacity-85;
      }

      a {
        @apply flex items-center;
      }
    }
  }

  .right {
    @apply flex-none flex justify-end;
    
    button {
      &:first-child {
        @apply mr-1;
      }
    }

    .button-desktop {
      @apply hidden md:inline-flex;
    }
  }

  .center {
    @apply flex-auto justify-center hidden lg:flex;

    nav {
      @apply flex items-center flex-wrap;
    }

    a {
      @apply text-slate-500 mx-2 text-sm;

      &:hover {
        @apply text-teal-600 underline;
      }
    }

    a.router-link-exact-active,
    a.active {
      @apply text-teal-600 underline;
    }
  }
}

header.dark {
  .center {
    a {
      @apply text-white;
    }

    a.router-link-exact-active,
    a.active  {
      @apply text-teal-500 underline;
    }
  }

  .mobile-icon {
    i {
      @apply text-white;
    }
  }
}

header.with-bg {
  @apply bg-white border-b border-slate-200;

  @screen lg {
    @apply bg-opacity-95;
  }
}

.mobile-nav-bottom {
  @apply fixed bottom-0 inset-x-0 bg-teal-900 z-10 grid;
  @apply grid-cols-5 h-12 items-center lg:hidden;

  .mobile-nav-item {
    @apply text-center text-white flex flex-col h-full justify-center items-center;

    span {
      @apply text-xs;
      margin-top: 2px;
    }

    i {
      @apply leading-none;
    }

    &:hover {
      @apply bg-teal-500;
    }
  }

  a.router-link-exact-active {
    @apply bg-teal-500;
  }
}
</style>