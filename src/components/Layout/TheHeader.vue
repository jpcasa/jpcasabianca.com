<script setup>
// import menus pinia store
import { useMenusStore } from '~/stores/menus'

const menusStore = useMenusStore()

const props = defineProps({
  mode: {
    type: String,
    default: 'light'
  }
})

const windowScroll = ref(0)

const headerMode = ref(props.mode)
const withBg = ref(false)

const buttonTypes = computed(() => {
  return headerMode.value === 'light' ? ['default', 'dark'] : ['secondary', 'primary']
})

const handleScroll = event => {
  windowScroll.value = window.scrollY
  if (windowScroll.value > 500) {
    headerMode.value = 'light'
    withBg.value = true
  } else {
    headerMode.value = props.mode
    withBg.value = false
  }
}

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template lang="pug">
header(:class="[headerMod, { 'with-bg': withBg }]")
  .container
    .left
      router-link(to="/")
        Logo(:mode="headerMode")
    .center
      nav
        .nav-item(v-for="(item, i) in menusStore.mainMenu" :key="i")
          router-link(v-if="item.local" :to="item.link") {{ item.name }}
          a(v-if="!item.local" :href="item.link" target="_blank") {{ item.name }}
    .right
      Button(:type="buttonTypes[0]") Social & CV
      Button(:type="buttonTypes[1]") Let's Connect
      .mobile-icon
        i.uil.uil-bars
.mobile-nav-bottom
  .mobile-nav-item(v-for="(item, i) in menusStore.mainMenu" :key="i")
    i.uil(:class="item.icon")
    router-link(v-if="item.local" :to="item.link") {{ item.name }}
    a(v-if="!item.local" :href="item.link" target="_blank") {{ item.name }}
</template>

<style lang="scss" scoped>
header {
  @apply h-14 fixed w-full top-0 inset-x-0 z-10;
  transition: 0.4s all;

  .container {
    @apply flex items-center h-full;
  }

  .left,
  .right {
    @apply lg:w-64;
  }

  .left {
    @apply flex-auto lg:flex-none;

    .logo {
      @apply w-40;

      &:hover {
        @apply opacity-85;
      }
    }
  }

  .right {
    @apply flex-none flex justify-end;
    
    button {
      @apply hidden lg:inline-flex;

      &:first-child {
        @apply mr-1;
      }
    }

    .mobile-icon {
      @apply lg:hidden;

      i {
        @apply text-2xl cursor-pointer;
      }
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

    a.router-link-exact-active {
      @apply text-teal-600 underline;
    }
  }
}

header.dark {
  .center {
    a {
      @apply text-white;
    }

    a.router-link-exact-active {
      @apply text-teal-500 underline;
    }
  }
}

header.with-bg {
  @apply bg-white bg-opacity-75;
}

.mobile-nav-bottom {
  @apply fixed bottom-0 inset-x-0 bg-teal-800 z-10 grid;
  @apply grid-cols-5 h-10 items-center lg:hidden;

  .mobile-nav-item {
    @apply text-center text-white flex flex-col h-full justify-center;

    a {
      @apply text-xs;
    }

    i {
      @apply leading-none;
      margin-bottom: 2px;
    }

    &:hover {
      @apply bg-teal-500;
    }
  }
}
</style>