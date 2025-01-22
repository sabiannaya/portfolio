<script setup>
import { ref } from 'vue';

import Header from '../components/HeaderComponent.vue';
import Intro from '../components/IntroComponent.vue';
import About from '../components/AboutComponent.vue';
import Social from '../components/bullets/SocialsComponent.vue';
import Project from '../components/ProjectComponent.vue';
import Education from '../components/EducationComponent.vue';
import WorkExperience from '../components/WorkExperienceComponent.vue';
import ModalImages from '../components/ModalImagesComponent.vue';
const socials = [
    {
        name: 'github',
        link: "https://github.com/sabiannaya",
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

const portoRepoLink = "https://github.com/sabiannaya/portfolio";

const isShowImageModal = ref(false);
const imagesContainer = ref(null);
const showImageModal = (images) => {
    document.body.style.overflow = 'hidden';
    isShowImageModal.value = true;
    imagesContainer.value = images;
}

const closeImageModal = () => {
    document.body.style.overflow = 'auto';
    isShowImageModal.value = false;
}
</script>

<template>
    <body>
        <div class="bg-slate-900">
            <div>
                <ModalImages v-if="isShowImageModal" :images="{...imagesContainer}" @close-image-modal="closeImageModal"></ModalImages>
            </div>
            <div>
                <Header></Header>
                <Intro id="intro" class="py-4 md:py-6 lg:py-8"></Intro>
                <About id="about" class="py-16 md:py-20 lg:py-24"></About>
                <Education id="education" class="py-16 md:py-20 lg:py-24"></Education>
                <WorkExperience id="work-experience" class="py-16 md:py-20 lg:py-24"></WorkExperience>
                <Project id="project" class="py-24 md:py-28 lg:py-32" @show-image-modal="showImageModal"></Project>
                <div class="w-full flex items-center justify-center h-[25vh]">
                    <router-link to="/#intro" class="text-teal-50 hover:text-teal-200 text-xl">Back to Top</router-link>
                </div>
                <Social></Social>
                <footer class="text-slate-100 flex flex-col justify-centertext-base py-5 px-5">
                    <!-- social on mobile -->
                    <div class="px-5 flex flex-row gap-16 items-center justify-center sm:hidden">
                        <div v-for="(item, index) in socials" :key="index">
                            <a :href="item.link" target="_blank" class="text-teal-400 hover:text-teal-100">
                                <i :class="item.class"></i>
                            </a>
                        </div>
                    </div>
                    <p class="py-5 sm:py-0 sm:pb-5 text-center">Created by Sabian Annaya with Vue and Tailwind CSS</p>
                    <p class="text-center text-sm">View this <a :href="portoRepoLink" class="text-teal-400 hover:text-teal-100" target="_blank">Portfolio</a> on GitHub</p>
                </footer>
            </div>
        </div>
    </body>
</template>