<script setup lang="ts">
    import { ref, onMounted }  from "vue"
    import { useRoute } from 'vue-router';
    import { useCountriesStore } from '@/stores/countries';
    import { numberWithDots } from '@/server/helpers';

    const route = useRoute();
    const store = useCountriesStore();

    const data = ref<any>(null);
    const languages = ref<string[]>([])
    const currencies = ref<string[]>([])
    const population = ref<string>('')
    const borderCountries = ref<string[]>([])

    onMounted(async () => {
        let countries : any = [];

        if (store.countries) {
            countries = store.countries
        }
        const id = Number(route.params.id);
        data.value = countries[id]

        languages.value = Object.keys(data.value.languages)
        currencies.value = Object.keys(data.value.currencies)
        population.value = numberWithDots(data.value.population)
        for (const border of data.value.borders) {
            countries.map((country : any) => {
                if (country.cca3 == border) {
                    return borderCountries.value.push(country.name.common)
                }
            })
        }
    });
</script>


<template>
    <main class="max-w-[1440px] text-[16px] dark:bg-gray-800 dark:text-white p-2">
        <div class="py-10 pl-4">
            <a href="/">
                <button class="py-2 px-8 shadow-md shadow-gray-500 rounded-md"> 
                    <div class="flex justify-center items-center gap-2 mr-4">
                        <font-awesome-icon :icon="['fas', 'arrow-left']" /> 
                        
                        <p> Back </p>
                    </div>
                </button>
            </a>
        </div>
        <div class="flex justify-center items-start gap-16 flex-col lg:flex-row">
            <div>
                <picture class="flex border-red-300 border">
                    <img class="max-w-[375px] max-h-[400px]" :src="data?.flags.svg" :alt="'Bandeira do país'+data?.name?.common">
                </picture>
            </div>
            <div class="max-w-[375px] mb-4 p-2">
                <p class="font-extrabold text-[32px] mb-4"> {{ data?.name?.common }} </p>
                <div class="flex flex-col justify-start items-start gap-8 mb-8 lg:flex-row">
                    <div>
                        <p class="leading-loose"> <span class="font-extrabold"> Native Name: </span> {{ data?.name.official }} </p>
                        <p class="leading-loose"> <span class="font-extrabold"> Population: </span> {{ population }} </p>
                        <p class="leading-loose"> <span class="font-extrabold"> Region: </span> {{ data?.region }} </p>
                        <p class="leading-loose"> <span class="font-extrabold"> Sub Region: </span> {{ data?.subregion }} </p>
                        <p class="leading-loose"> <span class="font-extrabold"> Capital: </span> 
                            <span v-for="(capital, id) of data?.capital"> {{ capital }}<span v-if="id + 1 !== data?.capital.length">, </span> </span>
                        </p>
                    </div>
                    <div>
                        <p class="leading-loose"> <span class="font-extrabold"> Top Level Domain: </span> {{ data?.tld[0] }} </p>
                        <p class="leading-loose"> 
                            <span class="font-extrabold"> Currencies: </span> 
                            <span v-for="(obj, id) of currencies"> {{ data?.currencies[obj]?.name }}<span v-if="id + 1 !== currencies.length">, </span> </span> 
                        </p>
                        <p class="leading-loose"> 
                            <span class="font-extrabold"> Languages: </span> 
                            <span v-for="(obj, id) of languages"> {{ data?.languages[obj] }}<span v-if="id + 1 !== languages.length">, </span> </span> 
                        </p>
                    </div>
                </div>
                <div class="flex flex-col justify-start items-start gap-4 lg:flex-row">
                    <p class="font-extrabold"> Border Countries: </p>
                    <div class="flex gap-2 flex-wrap justify-center items-center lg:flex-row">
                        <button class="px-4 rounded-md border-2" v-for="(nameCountry, id) of borderCountries" :key="id"> {{ nameCountry }} </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>