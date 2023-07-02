<script setup>
const logo = [
    {
        name: "SMAN22",
        path: "./edulogo/SMAN22.jpg"
    },
    {
        name: "UPI",
        path: "./edulogo/upi.jpg"
    }
]
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex flex-row items-center">
            <span class="w-[60vw] h-full justify-center flex flex-col gap-5">
                <span
                    class="text-4xl text-teal-50 font-bold bg-teal-500 w-fit translate-x-[25vw] translate-y-14 px-5 py-2 rounded-sm">
                    Education
                </span>
                <div class="border border-teal-100 px-10 pt-16 pb-8">
                    <div class="flex flex-row gap-10">
                        <span class="border-r border-lime-100 pr-10">
                            <img :src="logo[0].path" class="w-32 h-24 lg:w-48 lg:h-48"/>
                        </span>
                        <span class="flex flex-col justify-around">
                            <p class="text-teal-100 font-semibold text-3xl">SMA Negeri 22 Bandung</p>
                            <p class="text-teal-100 text-2xl">Science</p>
                            <p class="text-slate-300 text-xl">2017 - 2020</p>
                        </span>
                    </div>
                </div>
                <div class="border border-teal-100 px-10 py-8">
                    <div class="flex flex-row items-center gap-10">
                        <span class="border-r border-lime-100 pr-10">
                            <img :src="logo[1].path" class="w-32 h-24 lg:w-48 lg:h-48"/>
                        </span>
                        <span class="flex flex-col justify-around">
                            <p class="text-teal-100 font-semibold text-3xl">Universitas Pendidikan Indonesia</p>
                            <p class="text-teal-100 text-2xl">Computer Science</p>
                            <p class="text-slate-300 text-xl">2020 - Present</p>
                            <p class="text-slate-300 text-xl">Current GPA: 3.76</p>
                            <p class="text-slate-300 text-xl">PTESOL Score: 570</p>
                        </span>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>