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
            <span class="w-[95vw] md:w-[60vw] h-full justify-center flex flex-col gap-5">
                <span
                    class="text-4xl text-teal-50 font-bold bg-teal-500 w-fit translate-x-1/3 sm:translate-x-[26vw] translate-y-12 px-5 py-2 rounded-sm">
                    Education
                </span>
                <div class="border border-teal-100 px-3 md:px-10 pt-16 pb-8">
                    <div class="grid grid-flow-col gap-5 md:gap-10 justify-start items-center">
                        <span class="flex items-center justify-center border-r border-lime-100 pr-5 w-32 h-24 lg:w-48 lg:h-48">
                            <img :src="logo[0].path" class=""/>
                        </span>
                        <span class="flex flex-col justify-around">
                            <p class="text-teal-100 font-semibold text-xl sm:text-2xl md:text-3xl">SMA Negeri 22 Bandung</p>
                            <p class="text-teal-100 text-lg sm:text-xl md:text-2xl">Science</p>
                            <p class="text-slate-300 text-base sm:text-lg md:text-xl">2017 - 2020</p>
                        </span>
                    </div>
                </div>
                <div class="border border-teal-100 px-3 md:px-10 py-8">
                    <div class="grid grid-flow-col gap-5 md:gap-10 justify-start items-center">
                        <span class="flex items-center justify-center border-r border-lime-100 pr-5 w-32 h-24 lg:w-48 lg:h-48">
                            <img :src="logo[1].path" class=""/>
                        </span>
                        <span class="flex flex-col justify-around">
                            <p class="text-teal-100 font-semibold text-xl sm:text-2xl md:text-3xl">Universitas Pendidikan Indonesia</p>
                            <p class="text-teal-100 text-lg sm:text-xl md:text-2xl">Computer Science</p>
                            <p class="text-slate-300 text-base sm:text-lg md:text-xl">2020 - 2024</p>
                            <p class="text-slate-300 text-base sm:text-lg md:text-xl">GPA: 3.77/4.00</p>
                        </span>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>