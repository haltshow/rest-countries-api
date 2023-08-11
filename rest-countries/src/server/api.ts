import axios from 'axios'

export async function getAllCountries() {
    const options = {
        method: 'GET',
        url: 'https://restcountries.com/v3.1/all',
    };
    const response : any = await axios.request(options);
    let countries = [];
    if (response.data) {
        countries = response.data
    } else {
        const res : any = await fetch('data.json');
        countries = await res.json();
    }

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