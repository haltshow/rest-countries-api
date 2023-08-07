<script setup lang="ts">
    import { numberWithDots } from '@/server/helpers';
    const props = defineProps(['country'])
</script>

<template>
    <a class="no-underline" @click="$router.push({name: 'detailCountry', params: { id: country.id }});">
        <div class="flex flex-col justify-start bg-white mx-2 my-4 shadow-md p-0 h-[400px] cursor-pointer">
            <div class="">
                <picture>
                    <img class="w-full h-[230px]" :src="country?.flag" :alt="'Bandeira do país'+country?.name">
                </picture>
            </div>
            <div class="p-4">
                <p class="mb-2 text-[18px] font-extrabold"> {{ country?.name }} </p>
                <p> <span class="font-semibold">Population:</span> {{ numberWithDots(country?.population) }} </p>
                <p> <span class="font-semibold">Region:</span> {{ country?.region }} </p>
                <p> <span class="font-semibold">Capital:</span> {{ country?.capital ? country.capital[0] : '' }} </p>
            </div>
        </div>
    </a>
</template>