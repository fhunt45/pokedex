<template>
  <div>
    <Pokeseachbar @inputPoke="searchPokemon"/>
    <div class="grid-x grid-margin-x grid-margin-y">
      <Pokecard v-for="(pokemon) in pokeList" :key="pokemon.id" :number="pokemon.id" @nameClicked="pokemonClicked"/>
    </div>
    <Modal ref="stats">
      <template v-slot:header>
      </template>
      <template v-slot:body>
        <Pokedetails :number="selectedPokemon"/>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import Pokecard from '@/components/Pokecard.vue'
import Pokedetails from '@/components/Pokedetails.vue'
import Pokeseachbar from '@/components/Pokeseachbar.vue'

export default {
  name: 'Pokegrid',
  components: {
    Pokecard,
    Modal,
    Pokedetails,
    Pokeseachbar,
  },
  data(){
    return{
      selectedPokemon: 1,
      searchString: ''
    }
  },
  created(){
    this.$store.dispatch('loadPokeList');
  },
  computed:{
    pokeList(){
      if(Number.isInteger(parseInt(this.searchString))){
        return this.$store.getters.filterPokemonListById(this.searchString);
      }else{
        return this.$store.getters.filterPokemonListByName(this.searchString);
      }
    },
  },
  methods: {
    pokemonClicked: function(id){
      this.selectedPokemon = id;
      this.$refs.stats.openModal();
    },
    searchPokemon: function(val){
      this.searchString = val;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
