<script setup>
import IconArrowLeft from '~icons/uil/arrow-left'
import IconArrowRight from '~icons/uil/arrow-right'

const props = defineProps({
  testimonies: {
    type: Array,
    required: true,
  }
})

const index = ref(0)

const testimony = computed(() => props.testimonies[index.value])

const next = () => {
  if (index.value < props.testimonies.length - 1) {
    index.value++
  } else {
    index.value = 0
  }
}

const prev = () => {
  if (index.value > 0) {
    index.value--
  } else {
    index.value = props.testimonies.length - 1
  }
}
</script>

<template lang="pug">
.testimony-slider
  .testimony-left
    img(src="/img/stars.png" alt="Review Stars")
    p.testimony {{ testimony.testimony }}
    .who
      .line
      p {{ testimony.person }}
    .job
      p {{ testimony.role }}
      span @ {{ testimony.company }}
    .options
      .dots
        .dot(
          v-for="(t, i) in testimonies"
          :key="i"
          :class="{ active: i == index }"
          @click="index = i"
        )
      .arrows
        .arrow.left(@click="prev()")
          icon-arrow-left(class="text-xl text-slate-500")
        .arrow.right(@click="next()")
          icon-arrow-right(class="text-xl text-slate-500")
  .testimony-right(:style="{ backgroundImage: `url(${testimony.image})` }")
  .img
    img(:src="testimony.image" alt="Testimony Image")
</template>

<style lang="scss" scoped>
.testimony-slider {
  @apply flex flex-col bg-slate-100 rounded;

  .testimony-left {
    img {
      @apply w-32;
    }
  }

  .testimony-right {
    @apply hidden;
  }

  .img {
    @apply flex md:hidden;

    img {
      @apply rounded-b;
    }
  }

  .options {
    @apply flex justify-between items-center mt-4;

    .dots {
      @apply flex;

      .dot {
        @apply w-2 h-2 rounded-full bg-slate-300 mr-2 cursor-pointer;

        &:hover {
          @apply bg-slate-600;
        }

        &.active {
          @apply bg-slate-600;
        }
      }
    }

    .arrows {
      @apply flex;

      .arrow {
        @apply w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center;
        transition: all 0.3s ease-in-out;

        &:hover {
          @apply bg-slate-300;
        }

        &.right {
          @apply ml-2;
        }
      }
    }
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
    }

    .testimony-right {
      @apply flex flex-none w-64 bg-cover bg-center rounded-r;      
    }
  }

  @screen lg {
    .testimony-right {
      @apply w-72;
    }
  }
}
</style>