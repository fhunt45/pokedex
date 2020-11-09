import axios from 'axios';

const pokeServiceClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getPokemonList (number) {
        return pokeServiceClient.get(`pokemon?limit=${number}`);
    },
    getPokeUrl (url) {
        return axios.get(url);
    }
}