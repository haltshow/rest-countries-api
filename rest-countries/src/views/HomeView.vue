<script setup lang="ts">
  import CardCountry from '@/components/CardCountry.vue'

  import { getAllCountries, type Country } from '@/server/api'

  import { ref, onMounted, watch }  from "vue"

  const countries = ref<Country[]>([])
  const countriesSup = ref<Country[]>([])
  const countrySearched = ref<string>('')
  const regionSelected = ref<string>('')

  onMounted(async () => {
    countries.value = await getAllCountries();
    countriesSup.value = countries.value
  });

  watch(countrySearched, async (term) => {
    let arr : Country[] = [];

    countries.value = countriesSup.value

    if (term != '') {
      arr = countries.value.filter((country) => country.name.common.includes(term))
      countries.value = arr
    }
  })

  watch(regionSelected, async (newRegion) => {
    let arr : Country[] = [];

    countries.value = countriesSup.value

    if (newRegion != '') {
      arr = countries.value.filter((country) => country.region == newRegion)
      countries.value = arr
    }
  })
</script>

<template>
  <main class="bg-gray-100 m-0 p-4 max-w-[1440px]">

    <div class="flex justify-between mt-8 mb-8">
      <div class="relative mx-2">
        <button class="absolute left-0 m-auto pointer p-4">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
        <input class="p-4 pl-[50px] rounded-md w-[500px] text-[16px] border-none" type="text" placeholder="Search for a country" v-model="countrySearched" />
      </div>

      <div class="mx-2">
        <select class="p-4 rounded-md" name="region" id="region" v-model="regionSelected">
          <option value="" disabled selected hidden>Filter by Region</option>
          <option value="Africa"> Africa </option>
          <option value="Americas"> Americas </option>
          <option value="Asia"> Asia </option>
          <option value="Europe"> Europe </option>
          <option value="Oceania"> Oceania </option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-4">
      <CardCountry v-for="(country, id) of countries" :key="id" 
        :country="{ 
            name: country?.name?.common, 
            flag: country?.flags?.png, 
            population: country?.population,
            region: country?.region,
            capital: country?.capital
          }" />
    </div>
  </main>
</template>