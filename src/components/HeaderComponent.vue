<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { Bars3Icon } from '@heroicons/vue/24/solid';


const CVUrl = "https://drive.google.com/file/d/1VNs0AENFvxa1O4oJGPlnBeA8a3lRhH9E/view?usp=sharing";
let isShowingNavCollapse = ref(false);

const toggleNavCollapse = () => {
    if (isShowingNavCollapse.value === true) isShowingNavCollapse.value = false;
    else isShowingNavCollapse.value = true;
}

</script>

<template>
    <section class="md:px-10 py-5 px-5 flex flex-row justify-between items-center" :class="{'border-lime-100 border-b': !isShowingNavCollapse}">
        <div>
            <router-link to="/#intro"
                class="martian-mono text-xl sm:text-2xl md:text-4xl text-teal-100">Sabiannaya.</router-link>
        </div>
        <!-- nav on desktop -->
        <nav class="hidden sm:flex sm:flex-row sm:items-center sm:gap-8 lg:gap-16 text-xl poppins">
            <router-link class="flex flex-row gap-2" to="/#about">
                <p class="text-teal-400">A.</p>
                <p class="text-teal-100 hover:text-teal-400">About</p>
            </router-link>
            <router-link class="flex flex-row gap-2" to="/#education">
                <p class="text-teal-400">B.</p>
                <p class="text-teal-100 hover:text-teal-400">Education</p>
            </router-link>
            <router-link class="flex flex-row gap-2" to="/#work-experience">
                <p class="text-teal-400">C.</p>
                <p class="text-teal-100 hover:text-teal-400">Work Experience</p>
            </router-link>
            <router-link class="flex flex-row gap-2" to="/#project">
                <p class="text-teal-400">D.</p>
                <p class="text-teal-100 hover:text-teal-400">Projects</p>
            </router-link>
            <a :href="CVUrl" target="_blank" class="border border-teal-400 rounded-lg text-teal-400 py-2 px-5 flex items-center justify-center hover:bg-teal-400 hover:text-slate-900 hover:font-semibold">
                <p>CV</p>
            </a>
        </nav>
        <!-- three bars button on mobile -->
        <div class="sm:hidden border rounded-md">
            <bars3-icon class="w-7 h-7 m-1 text-lime-200 cursor-pointer" @click="toggleNavCollapse()" />
        </div>
    </section>
    <!-- nav on mobile -->
    <div v-if="isShowingNavCollapse">
        <nav class="bg-slate-800 flex flex-col items-center justify-center  py-5 gap-3 text-xl">
            <router-link class="flex flex-row gap-2" to="/#about">
                <p class="text-teal-400">A.</p>
                <p class="text-teal-100">About</p>
            </router-link>
            <router-link class="flex flex-row gap-2" to="/#education">
                <p class="text-teal-400">B.</p>
                <p class="text-teal-100">Education</p>
            </router-link>
            <router-link class="flex flex-row gap-2" to="/#work-experience">
                <p class="text-teal-400">C.</p>
                <p class="text-teal-100">Work Experience</p>
            </router-link>
            <router-link class="flex flex-row gap-2" to="/#project">
                <p class="text-teal-400">D.</p>
                <p class="text-teal-100">Projects</p>
            </router-link>
            <span class="pt-5">
                <a :href="CVUrl" target="_blank" class="border border-teal-400 rounded-lg text-teal-400 py-2 px-5 flex items-center justify-center hover:bg-teal-400 hover:text-slate-900 hover:font-semibold">
                    <p>CV</p>
                </a>
            </span>
        </nav>
    </div>
</template>