import axios from 'axios'

export async function getAllCountries() {
    const options = {
        method: 'GET',
        url: 'https://restcountries.com/v3.1/all',
    };
    const response : any = await axios.request(options);
    const countries = response.data

    return countries
}

export interface Country {
    flags: {
        png: string
        svg: string
    },
    name: {
        common: string
    }
    population: number
    region: string
    capital: string[]
}