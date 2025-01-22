<script setup>
import { onMounted, defineEmits, defineProps, ref } from 'vue'

const emit = defineEmits(['closeImageModal'])
const props = defineProps(['images'])

const imageArray = ref(Object.values(props.images))
let currentImage = ref(imageArray.value[0])
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeImageModal')
    }
  })
})

let currentIndex = 0
const nextImage = () => {
  currentIndex = imageArray.value.findIndex((img) => img.path === currentImage.value.path)
  const nextIndex = currentIndex + 1
  if (nextIndex === imageArray.value.length) {
    currentIndex = 0
    currentImage.value = imageArray.value[0]
  } else {
    currentIndex = nextIndex
    currentImage.value = imageArray.value[nextIndex]
  }
}

const prevImage = () => {
  currentIndex = imageArray.value.findIndex((img) => img.path === currentImage.value.path)
  if (currentIndex - 1 === -1) {
    currentImage.value = imageArray.value[imageArray.value.length - 1]
    currentIndex = imageArray.value.length - 1
  } else {
    currentIndex = currentIndex - 1
    currentImage.value = imageArray.value[currentIndex]
  }
}
</script>
<template>
  <div class="h-screen w-screen fixed z-10" style="background-color: rgb(0, 0, 0, 0.5)">
    <div class="flex items-center justify-center w-full h-full">
      <div class="flex flex-col">
        <span class="w-full absolute top-16 left-[80vw]" @click.prevent="emit('closeImageModal')">
          <i class="fas fa-times fa-3x text-gray-200 hover:text-white cursor-pointer"></i>
        </span>
        <span class="absolute left-5 sm:left-10 md:left-20 top-1/2 z-20" @click.prevent="prevImage">
          <i class="fas fa-chevron-left fa-3x text-gray-200 hover:text-white cursor-pointer"></i>
        </span>
        <span
          class="absolute right-5 sm:right-10 md:right-20 top-1/2 z-20"
          @click.prevent="nextImage"
        >
          <i class="fas fa-chevron-right fa-3x text-gray-200 hover:text-white cursor-pointer"></i>
        </span>
        <img
          :src="currentImage.path"
          alt="image"
          class="object-contain"
          :class="{
            'h-[35vh] md:h-[65vh] w-[70rem] rotate-90 md:rotate-0':
              currentImage.orientation === 'landscape',
            'h-[35vh] md:h-[65vh] w-[70rem] rotate-90 md:rotate-0':
              currentImage.orientation === 'even',
            'w-[65vw] md:w-[80vw] h-[75vh]': currentImage.orientation === 'portrait'
          }"
        />
      </div>
      <span class="absolute bottom-10 text-white text-xl" @click.prevent="prevImage">
        <span class="flex flex-col items-center justify-center">
          <p>{{ currentIndex + 1 }} / {{ imageArray.length }}</p>
          <p>{{ currentImage.name }}</p>
        </span>
      </span>
    </div>
  </div>
</template>
