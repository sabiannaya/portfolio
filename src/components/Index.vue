<script setup>
import Header from './Header.vue';
import Intro from './Intro.vue';
import About from './About.vue';
import Social from './bullets/Social.vue';
import Project from './Project.vue';
import Education from './Education.vue';
</script>

<template>
    <div class="bg-slate-900">
        <Header class="w-full h-[8vh]"></Header>
        <Intro id="intro" class="w-full h-[92vh]"></Intro>
        <About id="about" class="w-full h-[100vh]"></About>
        <Education id="education" class="w-full h-[100vh]"></Education>
        <div class="h-[25vh] w-full">&nbsp;</div>
        <Project id="project" class="w-full"></Project>
        <div class="h-[25vh] w-full bottom-10 flex items-end justify-center">
            <router-link to="/#intro" class="pb-10 text-teal-50 hover:text-teal-200 text-xl">Back to Top</router-link>
        </div>
        <Social></Social>
    </div>
</template>