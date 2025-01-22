<script setup>

const socials = [
    {
        name: 'github',
        link: "https://github.com/sabiannaya",
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
    <div class="hidden sm:flex sm:flex-col items-center gap-10 w-fit h-fit fixed bottom-3 sm:bottom-0 sm:left-10">
        <!-- line for big screen -->
        <div class="inline-block sm:hidden h-0 w-24 border border-lime-50">
            &nbsp;
        </div>

        <!-- socials -->
        <ul class="flex sm:flex-col gap-10">
            <li v-for="(item, index) in socials" :key="index">
                <a :href="item.link" target="_blank">
                    <i class="fa-2xl text-teal-400 hover:text-teal-200" :class="item.class"></i>
                </a>
            </li>
        </ul>

        <!-- line for small screen -->
        <div class="hidden sm:inline-block sm:h-24 sm:w-0 h-0 w-0 border border-lime-50">
            &nbsp;
        </div>
    </div>

    <div class="hidden sm:flex sm:flex-col items-center gap-10 w-fit h-fit fixed bottom-3 sm:bottom-0 -right-16">
        <!-- email -->
        <a href="mailto:sabiannaya@gmail.com">
            <p class="sm:rotate-90 sm:-translate-y-32 text-sm text-teal-100 martian-mono hover:text-teal-300" style="letter-spacing: 5pt;">
                Sabiannaya@gmail.com
            </p>
        </a>
            
        <!-- line for big screen -->
        <div class="hidden sm:inline-block sm:h-24 sm:w-0 h-0 w-0 border border-lime-50">
            &nbsp;
        </div>

        <!-- line for small screen -->
        <div class="inline-block sm:hidden h-0 w-24 border border-lime-50">
            &nbsp;
        </div>
    </div>
</template>

