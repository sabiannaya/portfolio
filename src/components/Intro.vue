<script setup>
const imgLocation = "../public/myPhoto.jpeg";
</script>

<template>
    <div class="h-[92vh] w-screen flex flex-col items-center justify-center">
        <div class="flex flex-row h-fit gap-10 items-center">
            <span class="">
                <img :src="imgLocation" class="w-80 brightness-50"/>
            </span>
            <span class="w-[55vw] h-full justify-center flex flex-col gap-5">
                <p class="text-3xl text-teal-100">Hello! my name is</p>
                <p class="text-6xl font-bold text-teal-500">Sabian Annaya</p>
                <p class="text-3xl text-slate-400">I am a Computer Science student at Universitas Pendidikan Indonesia</p>
            </span>
        </div>
    </div>
</template>
