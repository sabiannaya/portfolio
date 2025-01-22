<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    company: 'PT. GITS Indonesia',
    type: 'Internship',
    position: 'Backend Software Engineer',
    period: 'August 2023 - December 2023',
    description:
      'I worked as a backend software engineer intern at PT. GITS Indonesia, a software development company based in Bandung, Indonesia. I was responsible for developing and maintaining the backend system of the company’s projects, which were built using Laravel.',
    technologies: ['Laravel', 'mySQL', 'Postman', 'Git', 'Gitlab']
  }
])
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-row items-center">
      <span class="w-[95vw] md:w-[60vw] h-full justify-center flex flex-col gap-5">
        <span
          class="text-3xl text-teal-50 font-semibold bg-teal-500 w-fit translate-x-1/3 sm:translate-x-[23vw] translate-y-12 px-5 py-2 rounded-sm"
        >
          Work Experience
        </span>
        <div class="border border-teal-100 px-3 md:px-10 pt-16 pb-8">
          <div v-for="(experience, index) in experiences" :key="index" class="flex flex-col gap-5">
            <div class="grid grid-cols-2">
              <div>
                <h1 class="text-3xl text-teal-200 font-semibold">{{ experience.company }}</h1>
                <h2 class="text-lg text-teal-100">{{ experience.period }}</h2>
              </div>
              <div>
                <h2 class="text-xl text-teal-100">{{ experience.position }}</h2>
                <h2 class="text-lg text-teal-100">{{ experience.type }}</h2>
                <p class="text-lg text-teal-50">{{ experience.description }}</p>
                <ol class="grid grid-cols-3 pt-3">
                  <li
                    v-for="(tech, index) in experience.technologies"
                    :key="index"
                    class="text-md text-gray-400"
                  >
                    {{ tech }}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>
