<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav class="px-10 border-b border-lime-100 flex flex-row justify-between items-center">
        <div>
            <a href="" class="martian-mono text-4xl text-teal-100">Sabiannaya.</a>
        </div>
        <div class="flex flex-row items-center gap-8 lg:gap-16 text-xl poppins">
            <router-link class="flex flex-row gap-2" to="">
                <p class="text-teal-400">A.</p>
                <p class="text-teal-100">About</p>
            </router-link>
            <router-link class="flex flex-row gap-2" to="">
                <p class="text-teal-400">B.</p>
                <p class="text-teal-100">Education</p>
            </router-link>
            <router-link class="flex flex-row gap-2" to="">
                <p class="text-teal-400">C.</p>
                <p class="text-teal-100">Things i've built</p>
            </router-link>
            <a href="mailto:sabiannaya@upi.edu" class="bg-teal-800 p-2 rounded shadow-md" to="">
                <p class="text-teal-300">Email me!</p>
            </a>
        </div>
    </nav>
</template>