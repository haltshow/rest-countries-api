<script setup lang="ts">
    import { ref }  from "vue"
    const light = ref<boolean>(true)
    function toggleMode() {
        light.value = !light.value
        document.body.classList.toggle("dark");
    }
</script>

<template>
    <header class="bg-white border-b-4 border-b-gray-100 max-w-[1440px] min-w-[375px] w-full dark:bg-gray-800 dark:text-white">
        <nav class="flex justify-between items-center p-4">
            <p class="lg:text-[22px] md:text-[18px] sm:text-[16px] font-extrabold ml-4"> Where in the world? </p>
            <div @click="toggleMode">
                <div class="flex justify-center items-center gap-2 mr-4 cursor-pointer" v-if="light">
                    <font-awesome-icon :icon="['fas', 'moon']" />
                    <p class="text-[16px] sm:text-[14px] font-semibold"> Dark Mode </p>
                </div>
                <div class="flex justify-center items-center gap-2 mr-4 cursor-pointer" v-else>
                    <font-awesome-icon :icon="['fas', 'sun']" />                
                    <p class="text-[16px] sm:text-[14px] font-semibold"> Light Mode </p>
                </div>
            </div>
        </nav>
    </header>
</template>