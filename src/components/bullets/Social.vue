<script setup>

const socials = [
    {
        name: 'github',
        link: "https://github.com/TNAlthea",
        class: "fab fa-github-square"
    },
    {
        name: 'linkedin',
        link: "https://www.linkedin.com/in/sabiannaya/",
        class: "fab fa-linkedin"
    },
    {
        name: 'facebook',
        link: "https://www.facebook.com/sabian.annayahavid.3/",
        class: "fab fa-facebook-square"
    }
]

</script>

<template>
    <div class="flex lg:flex-col items-center gap-10 w-fit h-fit fixed bottom-3 lg:bottom-0 lg:left-10">
        <!-- line for big screen -->
        <div class="inline-block lg:hidden h-0 w-24 border border-lime-50">
            &nbsp;
        </div>

        <!-- socials -->
        <ul class="flex lg:flex-col gap-10">
            <li v-for="(item, index) in socials" :key="index">
                <a :href="item.link" target="_blank">
                    <i class="fa-2xl text-teal-400" :class="item.class"></i>
                </a>
            </li>
        </ul>

        <!-- line for small screen -->
        <div class="hidden lg:inline-block lg:h-24 lg:w-0 h-0 w-0 border border-lime-50">
            &nbsp;
        </div>
    </div>

    <div class="flex lg:flex-col items-center gap-10 w-fit h-fit fixed bottom-3 lg:bottom-0 -right-16">
        <!-- email -->
        <p class="lg:rotate-90 lg:-translate-y-28 text-lg text-teal-100 martian-mono" style="letter-spacing: 5pt;">Sabiannaya@upi.edu</p>

        <!-- line for big screen -->
        <div class="hidden lg:inline-block lg:h-24 lg:w-0 h-0 w-0 border border-lime-50">
            &nbsp;
        </div>

        <!-- line for small screen -->
        <div class="inline-block lg:hidden h-0 w-24 border border-lime-50">
            &nbsp;
        </div>
    </div>
</template>

<style scoped></style>