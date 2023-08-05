<script setup lang="ts">
    const props = defineProps(['country'])
</script>

<template>
    <div class="flex flex-col justify-center items-center p-2 bg-white mx-2 my-4 shadow-md">
        <div>
            <img :src="country?.flag" :alt="'Bandeira do país'+country?.name">
        </div>
        <div class="flex flex-col justify-center items-center">
            <p class="mb-2 text-[18px] font-extrabold"> {{ country?.name }} </p>
            <p> <span class="font-semibold">Population:</span> {{ country?.population }} </p>
            <p> <span class="font-semibold">Region:</span> {{ country?.region }} </p>
            <p> <span class="font-semibold">Capital:</span> {{ country?.capital ? country.capital[0] : '' }} </p>
        </div>
    </div>
</template>