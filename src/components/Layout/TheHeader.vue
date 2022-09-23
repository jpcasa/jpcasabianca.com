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

const buttonTypes = computed(() => {
  return props.mode === 'light' ? ['default', 'dark'] : ['secondary', 'primary']
})
</script>

<template lang="pug">
header(:class="[mode]")
  .container
    .left
      router-link(to="/")
        Logo(:mode="mode")
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
</template>

<style lang="scss" scoped>
header {
  @apply h-16 fixed w-full top-0 inset-x-0 z-10;

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
        @apply text-2xl;
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
  }
}

header.dark {
  .center {
    a {
      @apply text-white;
    }
  }
}
</style>