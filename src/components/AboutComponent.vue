<script setup>
const bandungImg = './myPhoto.jpeg'

const technologies = [
  'Vue JS',
  'Laravel',
  'Tailwind',
  'HTML',
  'Bootstrap',
  'CodeIgniter',
  'mySQL',
  'PostgreSQL',
  'Flutter',
  'Lua',
  'Ubuntu',
  'SSH',
  'Docker',
  'Nginx',
  'Git',
  'Gitlab',
  'Postman',
]

</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col sm:flex-row items-center">
      <span class="sm:w-[55vw] h-full justify-center flex flex-col gap-5">
        <span
          class="text-4xl text-teal-50 font-bold bg-teal-500 w-fit translate-x-5 translate-y-14 px-5 py-2 rounded-sm"
        >
          About Me
        </span>
        <span class="border border-teal-100 w-[90vw] sm:w-[50vw] px-5 pt-16 pb-8">
          <p class="text-teal-300 text-xl">
            Hello! My name is Sabian. I was born in July 2002 in Bandung, West Java, Indonesia. I am
            just graduated from Universitas Pendidikan Indonesia with a bachelor degree in Computer Science (BASc). I have a strong
            interest in technology development and always eager to learn new things, especially
            anything related to technology.
          </p>
          <p class="text-teal-300 text-xl pt-5">
            During college, I have learned many programming languages and subjects. 'Website
            Development' is one of my current favorite subjects. This interest started when I was
            working on an exercise project for an assignment. I realized that nothing is easy, but I
            found this particular subject to be enjoyable. Since then, I have decided to explore Web
            Development further.
          </p>
          <p class="text-teal-300 text-xl pt-5">Aside from Web Development, i also have build several simple programs such as mobile applications and a game.</p>
          <div class="text-slate-300 text-lg pt-5">
            List of frameworks/technologies I have learned/been working with:
            <ol class="flex flex-col md:grid md:grid-cols-3 justify-around px-10 pt-3">
                <li v-for="(tech, index) in technologies" :key="index" class="list-disc text-slate-400 md:text-lg">{{ tech }}</li>
            </ol>
          </div>
        </span>
      </span>
      <!-- <img
        :src="bandungImg"
        class="object-cover w-56 md:w-60 lg:w-68 h-60 md:h-64 lg:h-72 translate-y-10"
      /> -->
    </div>
  </div>
</template>
