<script setup lang="ts">
    import { ref }  from "vue"
    const light = ref<boolean>(true)
    function toggleMode() {
        light.value = !light.value

        if (light.value) {
            // document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        } else {
            document.body.classList.add("dark-mode");
            const main : any = document.getElementById('home-main');
            main.classList.add("dark-mode");
            // document.body.classList.remove("light-mode");
        }
    }
</script>

<template>
    <header class="flex justify-between items-center p-4 bg-white border-b-4 border-b-gray-100 max-w-[1440px]">
        
        <p class="text-[22px] font-extrabold ml-4"> Where in the world? </p>
        <div @click="toggleMode">
            <div class="flex justify-center items-center gap-2 mr-4 cursor-pointer" v-if="light">
                <font-awesome-icon :icon="['fas', 'moon']" />
                <p class="text-[16px] font-semibold"> Dark Mode </p>
            </div>
            <div class="flex justify-center items-center gap-2 mr-4 cursor-pointer" v-else>
                <font-awesome-icon :icon="['fas', 'sun']" />                
                <p class="text-[16px] font-semibold"> Light Mode </p>
            </div>
        </div>
    </header>
</template>