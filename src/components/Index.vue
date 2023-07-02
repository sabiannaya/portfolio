<script setup>
import Header from './Header.vue';
import Intro from './Intro.vue';
import About from './About.vue';
import Social from './bullets/Social.vue';
import Project from './Project.vue';
import Education from './Education.vue';

const socials = [
    {
        name: 'github',
        link: "https://github.com/TNAlthea",
        class: "fab fa-github-square fa-2xl"
    },
    {
        name: 'linkedin',
        link: "https://www.linkedin.com/in/sabiannaya/",
        class: "fab fa-linkedin fa-2xl"
    },
    {
        name: 'facebook',
        link: "https://www.facebook.com/sabian.annayahavid.3/",
        class: "fab fa-facebook-square fa-2xl"
    }
]
</script>

<template>
    <div class="bg-slate-900">
        <Header></Header>
        <Intro id="intro"></Intro>
        <About id="about" class="w-full h-[100vh]"></About>
        <Education id="education" class="w-full h-[100vh]"></Education>
        <div class="h-[25vh] w-full">&nbsp;</div>
        <Project id="project" class="w-full"></Project>
        <div class="w-full flex items-center justify-center h-[25vh]">
            <router-link to="/#intro" class="text-teal-50 hover:text-teal-200 text-xl">Back to Top</router-link>
        </div>
        <Social></Social>

        <footer class="text-slate-100 flex flex-col justify-centertext-base px-5">
            <!-- social on mobile -->
            <div class="px-5 flex flex-row gap-16 items-center justify-center sm:hidden">
                <div v-for="(item, index) in socials" :key="index">
                    <a :href="item.link" target="_blank" class="text-teal-400 hover:text-teal-100">
                        <i :class="item.class"></i>
                    </a>
                </div>
            </div>
            <p class="py-10 sm:py-0 sm:pb-10 text-center">Created by Sabian Annaya in 2023 with Vue and Tailwind CSS</p>
        </footer>
    </div>
</template>