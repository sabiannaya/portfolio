<script setup>
const bandungImg = "./bandung.jpeg";
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex flex-row items-center">
            <span class="w-[55vw] h-full justify-center flex flex-col gap-5">
                <span
                    class="text-4xl text-teal-50 font-bold bg-teal-500 w-fit translate-x-5 translate-y-14 px-5 py-2 rounded-sm">
                    About Me
                </span>
                <span class="border border-teal-100 w-[50vw] px-5 pt-16 pb-8">
                    <p class="text-teal-300 text-xl">Hello! My name is Sabian. I was born in July 2002 in Bandung, West
                        Java, Indonesia. I am currently a Computer Science student at Universitas Pendidikan Indonesia
                        with a strong interest in technology development. I'm always eager to learn new things, especially
                        anything related to technology.
                    </p>
                    <p class="text-teal-300 text-xl pt-5">During college, I have learned many programming languages and
                        subjects. 'Website Development' is one of my current favorite subjects.
                        This interest started when I was working on an exercise project for an assignment. I realized that nothing is easy, but I found this particular subject to be enjoyable. Since then, I have decided to explore Web Development further.</p>
                    <p class="text-slate-300 text-lg pt-5">
                        List of frameworks/technologies I have learned/been working with:
                    <div class="grid grid-cols-3 pt-3">
                        <div>
                            <ol class="px-10 list-disc text-slate-400 text-lg">
                                <li>Vue 3</li>
                                <li>Laravel (v10)</li>
                                <li>Tailwind</li>
                            </ol>
                        </div>
                        <div>
                            <ol class="px-10 list-disc text-slate-400 text-lg">
                                <li>HTML</li>
                                <li>Bootstrap</li>
                                <li>CodeIgniter (v4)</li>
                            </ol>
                        </div>
                        <div>
                            <ol class="px-10 list-disc text-slate-400 text-lg">
                                <li>SQL</li>
                                <li>Flutter</li>
                                <li>Lua</li>
                            </ol>
                        </div>
                    </div>
                    </p>
                </span>
            </span>
            <img :src="bandungImg" class="object-cover w-68 h-72 translate-y-10" />
        </div>
    </div>
</template>
