<script setup lang="ts">
    import { numberWithDots } from '@/server/helpers';
    const props = defineProps(['country'])
</script>

<template>
    <div class="bg-white cursor-pointer dark:bg-gray-800 rounded overflow-hidden shadow-lg
        w-full max-w-sm
        grid grid-rows-2"
        @click="$router.push({name: 'detailCountry', params: { id: country.id }});"
    >
        <picture>
            <img class="object-cover object-center h-full w-full" :src="country?.flag" :alt="'Bandeira do país'+country?.name">
        </picture>
        <div class="p-4">
            <p class="mb-2 text-[18px] font-extrabold"> {{ country?.name }} </p>
            <p> <span class="font-semibold">Population:</span> {{ numberWithDots(country?.population) }} </p>
            <p> <span class="font-semibold">Region:</span> {{ country?.region }} </p>
            <p> <span class="font-semibold">Capital:</span> {{ country?.capital ? country.capital[0] : '' }} </p>
        </div>
    </div>
</template>