import axios from 'axios'

export async function getAllCountries() {
    const options = {
        method: 'GET',
        url: 'https://restcountries.com/v3.1/all',
    };
    const response : any = await axios.request(options);
    console.log("response: ", response.data)
    const countries = response.data

    return countries
}

export interface Country {
    flags: {
        png: string
    },
    name: {
        common: string
    }
    population: number
    region: string
    capital: string[]
}