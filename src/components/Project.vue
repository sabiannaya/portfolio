<script setup>
const meatengoImg = [
    {
        name: "logo",
        path: "./meatengo/meatengo logo.png"
    },
    {
        name: "admin",
        path: "./meatengo/[admin] inventory management.png"
    },
    {
        name: "cashier",
        path: "./meatengo/[cashier] dashboard.png"
    },
];

const perpuskomImg = [
    {
        name: "splash_screen",
        path: "./perpuskom/splash screen.png"
    },
    {
        name: "book_detail",
        path: "./perpuskom/book detail.png"
    },
    {
        name: "welcome_screen",
        path: "./perpuskom/welcome screen.png"
    }
];

const smartEnglishImg = [
    {
        name: "desktop",
        path: "./smart english/Desktop.png",
    },
    {
        name: "login",
        path: "./smart english/login.png"
    }
];

const githubLink = [
    {
        name: "meatengo",
        link: "https://github.com/TNAlthea/meatengo",
        class: "fab fa-github-square fa-2xl"
    },
    {
        name: "perpuskom",
        link: "https://github.com/TNAlthea/Perpuskom",
        class: "fab fa-github-square fa-2xl"
    },
    {
        name: "smart_english",
        link: "https://github.com/TNAlthea/smart-english-copy.git",
        class: "fab fa-github-square fa-2xl"
    }
];
</script>

<template>
    <div class="flex justify-center items-center">
        <div class="w-[75vw] min-h-[75vh] border-[1px]">
            <span class="text-2xl font-semibold bg-teal-500 text-teal-50 absolute right-80 -translate-y-10 p-5 rounded-md">
                <p>Projects I've built/contributed to</p>
            </span>
            <section class="p-10">
                <h1 class="pb-5 text-teal-200 text-4xl"><span class="text-teal-500 font-semibold">1. </span>Meatengo</h1>
                <div class="flex flex-row">
                    <div class="flex flex-col gap-5 w-fit px-10 border-r border-lime-100">
                        <span v-for="(item, index) in meatengoImg" :key="index" class="w-96">
                            <img :src="item.path" />
                        </span>
                    </div>
                    <div class="flex flex-col justify-between px-10">
                        <span class="text-teal-300 text-xl">
                            <p>
                                I built a multi-site grocery store project called Meatengo, which includes a cashier app,
                                admin panel, and user's marketplace (marketplace implementation planned for the future).
                            </p>
                            <p class="pt-5">
                                Meatengo is built using Vue 3 for the front-end and Laravel API for the back-end. It offers a wide range of daily necessities, including water, food, and snacks.
                            </p>
                        </span>
                        <div class="flex flex-row justify-between text-teal-50">
                            <p>HTML, CSS, Vue 3, Laravel 10, SQL, Tailwind CSS</p>
                            <a class="flex flex-row gap-5 items-center hover:text-teal-500" :href="githubLink[0].link" target="_blank">
                                <p>See code on GitHub</p>
                                <i :class="githubLink[0].class"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-10">
                <h1 class="pb-5 text-teal-200 text-4xl"><span class="text-teal-500 font-semibold">2. </span>Perpuskom</h1>
                <div class="flex flex-row">
                    <div class="flex flex-row gap-5 w-fit px-10 border-r border-lime-100">
                        <span v-for="(item, index) in perpuskomImg" :key="index" class="w-44">
                            <img :src="item.path" />
                        </span>
                    </div>
                    <div class="flex flex-col justify-between px-10">
                        <span class="text-teal-300 text-xl">
                            <p>
                                I contributed to the development of a digital library application called 'Perpuskom' as a full-stack developer.
                                Our team of 4 members, consisting of developers and designers, worked together to create this project. My main objective was to implement the back-end system to store all book credentials and develop some front-end pages based on the provided UI/UX designs.
                            </p>
                        </span>
                        <div class="flex flex-row justify-between text-teal-50">
                            <p>Flutter, Dart, SQLite</p>
                            <a class="flex flex-row gap-5 items-center hover:text-teal-500" :href="githubLink[1].link" target="_blank">
                                <p>See code on GitHub</p>
                                <i :class="githubLink[1].class"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-10">
                <h1 class="pb-5 text-teal-200 text-4xl"><span class="text-teal-500 font-semibold">3. </span>Smart English</h1>
                <div class="flex flex-row">
                    <div class="flex flex-row items-center gap-5 w-fit px-10 border-r border-lime-100">
                        <span v-for="(item, index) in smartEnglishImg" :key="index" class="w-64">
                            <img :src="item.path" />
                        </span>
                    </div>
                    <div class="flex flex-col justify-between px-10">
                        <span class="text-teal-300 text-xl">
                            <p>
                                I contributed to the development of an English tutoring website application called 'Smart English' as a front-end developer.
                                Our team of 7 members, including front-end and back-end developers, as well as designers, worked together on this project. My main responsibility was to implement all front-end pages based on the provided UI/UX designs.
                            </p>
                        </span>
                        <div class="flex flex-row justify-between text-teal-50">
                            <p>CodeIgniter 4, Bootstrap, JS (ES6), CSS, HTML</p>
                            <a class="flex flex-row gap-5 items-center hover:text-teal-500" :href="githubLink[2].link" target="_blank">
                                <p>See code on GitHub</p>
                                <i :class="githubLink[2].class"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
