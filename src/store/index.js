import Vue from 'vue'
import Vuex from 'vuex'
import PokelistService from '@/services/PokelistService.js' 

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    pokeList: [],
  },
  getters:{
    fetchPokemon: (state) => (id) => {
      return state.pokeList.find(pokemon => pokemon.id == id);
    },
    filterPokemonListByName: (state) => (name) => {
      if(name != '' && name != undefined){
        return state.pokeList.filter( filteredPokeListElement => {
          return filteredPokeListElement.name.includes(name);
        })
      }
      return state.pokeList;
    },
    filterPokemonListById: (state) => (id) => {
      if(id != '' && id != undefined){
        return state.pokeList.filter( filteredPokeListElement => {
          return filteredPokeListElement.id == id;
        })
      }
      return state.pokeList;
    },
  },
  mutations: {
    SET_POKELIST(state, pokeList){
      state.pokeList = pokeList;
    },
  },
  actions: {
    loadPokeList({commit}) {
      let auxPokelist = [];
      PokelistService.getPokemonList(151).then(response=> {
        let pokemonPromises = [];
        response.data.results.forEach(pokemonId=> {
          pokemonPromises.push(PokelistService.getPokeUrl(pokemonId.url))
        });
        return pokemonPromises;
      }).then(response=>{
        return Promise.all(response)
      }).then(response=>{
        let speciesInfoPromises = [];
        response.forEach(response => {
          auxPokelist.push(response.data);
          speciesInfoPromises.push(PokelistService.getPokeUrl(response.data.species.url))
        })
        return speciesInfoPromises;
      }).then(response=>{
        return Promise.all(response);
      }).then(response=>{
        auxPokelist.forEach(pokemon=>{
          response.forEach(information=>{
            if(information.data.id === pokemon.id){
              pokemon.species_info = information.data;
            }
          })
        })
        commit("SET_POKELIST", auxPokelist);
      }).catch(error =>{ console.log('there was an error: ', error.response)})
    },
  },
})

/* V1
loadPokeList({commit}) {
    let promises = [];
    let auxPokeList = [];
    PokelistService.getPokemonList(2).then(response=> {
      for(let pokemonId of response.data.results){
        promises.push( PokelistService.getPokeUrl(pokemonId.url) )
      }
      Promise.all(promises).then(response=>{
        for(let pokemon of response){
          auxPokeList.push(pokemon.data);
        }
        commit('SET_POKELIST', auxPokeList);
      }).catch(error =>{ console.log('there was an error at pokemon: ', error.response)});
    }).catch(error =>{ console.log('there was an error at pokelist: ', error.response)})
  }, 
*/