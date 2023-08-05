<script setup lang="ts">
    const props = defineProps(['country'])
</script>

<template>
    <div class="flex flex-col justify-start bg-white mx-2 my-4 shadow-md p-0 h-[400px]">
        <div class="min-h-[230px]">
            <picture class="relative flex border-red-300 border">
                <img class="w-full h-full" :src="country?.flag" :alt="'Bandeira do país'+country?.name">
            </picture>
        </div>
        <div class="p-4">
            <p class="mb-2 text-[18px] font-extrabold"> {{ country?.name }} </p>
            <p> <span class="font-semibold">Population:</span> {{ country?.population }} </p>
            <p> <span class="font-semibold">Region:</span> {{ country?.region }} </p>
            <p> <span class="font-semibold">Capital:</span> {{ country?.capital ? country.capital[0] : '' }} </p>
        </div>
    </div>
</template>