<script setup lang="ts">
  import CardCountry from '@/components/CardCountry.vue'

  import { getAllCountries, type Country } from '@/server/api'

  import { ref, onMounted }  from "vue"

  const countries = ref<Country[]>([])

  onMounted(async () => {
    countries.value = await getAllCountries();
  });
</script>

<template>
  <div class="bg-gray-100 m-0 p-0">
    <div class="flex justify-between pt-8">
      <div class="ml-[64px] relative">
        <button class="absolute left-0 m-auto pointer p-4">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
        <input class="p-4 pl-[50px] rounded-md w-[500px] text-[16px] border-none" type="text" placeholder="Search for a country" />
      </div>

      <div class="mr-[64px]">
        <select class="p-4 rounded-md" name="region" id="region">
          <option value="" disabled selected hidden>Filter by Region</option>
          <option value=""> Africa </option>
          <option value=""> America </option>
          <option value=""> Asia </option>
          <option value=""> Europe </option>
          <option value=""> Oceania </option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-4 pt-4 px-4">
      <CardCountry v-for="(country, id) of countries" :key="id" 
        :country="{ 
            name: country?.name?.common, 
            flag: country?.flags?.png, 
            population: country?.population,
            region: country?.region,
            capital: country?.capital
          }" />
    </div>
  </div>
</template>