<script setup>
import IconReceiptAlt from '~icons/uil/receipt-alt'
import IconDownload from '~icons/uil/download-alt'

const downloadCV = () => window.location.href = '/PDF/CV_2023.pdf'
</script>

<template lang="pug">
.resume
  p Resume
  .download
    .icon-square
      icon-receipt-alt
    span jp-resume.pdf
  Button(type="dark" @click="downloadCV()")
    span Download
    icon-download
</template>

<style lang="scss" scoped>
.resume {
  @apply bg-white rounded border border-slate-200 p-4;

  p {
    @apply text-teal-900 font-medium mb-4;
  }

  .download {
    @apply flex items-center mb-6;

    .icon-square {
      @apply h-10 w-10 flex items-center justify-center rounded bg-teal-100 text-teal-600 mr-2;

      i {
        @apply text-xl leading-none;
      }
    }

    span {
      @apply text-slate-600;
    }
  }

  button {
    i {
      @apply ml-1 leading-none text-base;
    }
  }
}
</style>