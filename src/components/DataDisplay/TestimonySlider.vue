<script setup>
defineProps({
  testimony: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  person: {
    type: String,
    default: 'Hugo Plazas'
  },
  company: {
    type: String,
    default: 'Cartkit'
  },
  role: {
    type: String,
    default: 'Senior Product Designer'
  },
  rating: {
    type: Number,
    default: 5
  },
  image: {
    type: String,
    default: '/img/user.png'
  }
})
</script>

<template lang="pug">
.testimony-slider
  .testimony-left
    img(src="/img/stars.png" alt="Review Stars")
    p.testimony {{ testimony }}
    .who
      .line
      p {{ person }}
    .job
      p {{ role }}
      span @ {{ company }}
  .testimony-right(:style="{ backgroundImage: `url(${image})` }")
  .img
    img(:src="image" alt="Testimony Image")
</template>

<style lang="scss" scoped>
.testimony-slider {
  @apply flex flex-col bg-slate-100 rounded;

  .testimony-right {
    @apply hidden;
  }

  .img {
    @apply flex mt-6 md:hidden;
  }

  .testimony-left {
    @apply p-8;
    
    .testimony {
      @apply text-xl font-medium mt-3 mb-8;
    }
  }

  .who {
    @apply flex items-center;

    .line {
      @apply w-8 rounded-full bg-black mr-2;
      height: 3px;
    }

    p {
      @apply font-medium;
    }
  }

  .job {
    @apply flex items-center flex-wrap text-sm mt-4;

    p {
      @apply text-slate-500 mr-2;
    }

    span {
      @apply text-slate-800 font-medium;
    }
  }

  @screen md {
    @apply flex-row;

    .testimony-left {
      @apply flex-auto;

      img {
        @apply w-32;
      }
    }

    .testimony-right {
      @apply flex flex-none w-64 bg-cover bg-center rounded-r;
    }
  }
}
</style>