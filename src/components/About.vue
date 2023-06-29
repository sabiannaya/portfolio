<script setup>
const bandungImg = "../public/bandung.jpeg";
</script>

<template>
    <div class="h-[100vh] w-screen flex flex-col items-center justify-center">
        <div class="flex flex-row items-center">
            <span class="w-[55vw] h-full justify-center flex flex-col gap-5">
                <span
                    class="text-4xl text-teal-50 font-bold bg-teal-500 w-fit translate-x-5 translate-y-14 px-5 py-2 rounded-sm">
                    About Me
                </span>
                <span class="border border-teal-100 w-[50vw] px-5 pt-16 pb-8">
                    <p class="text-teal-300 text-xl">Hello! My name is Sabian. I was born in July 2002 at Bandung, West
                        Java, Indonesia. I am now a Computer Science student at Universitas Pendidikan Indonesia
                        that have a huge interest in technology development. I always eager to learn new things especially
                        anything
                        that relate with technology.
                    </p>
                    <p class="text-teal-300 text-xl pt-5">During the college i have learned many programming languages and
                        subjects, 'Website Development' is my one of current favorite subject.
                        This interest was started way back when i am trying to make a exercise project for a assignment, i
                        have aknowledge that nothing is easy but i was feeling that this particular subject was at least
                        enjoyable. From that on, i've decided to explore Web Development more.</p>
                    <p class="text-slate-300 text-lg pt-5">
                        List of framework/technologies i have learned/been working with:
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

