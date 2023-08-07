import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref(null)
  
  function setCountries(data : any) {
    countries.value = data
  }

  return { countries, setCountries }
})
