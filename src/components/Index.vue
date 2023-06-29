<script setup>
import Header from './Header.vue';
import Intro from './Intro.vue';
import About from './About.vue';
import Social from './bullets/Social.vue';
</script>

<template>
    <div class="bg-slate-900">
        <Header class="w-full h-[8vh]"></Header>
        <Intro class="w-full h-[92vh]"></Intro>
        <About class="w-full h-[100vh]"></About>
        <Social></Social>
    </div>
</template>