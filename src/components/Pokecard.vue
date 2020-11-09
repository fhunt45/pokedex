<template>
    <div class="pokecard card-background cell large-2 medium-4 small-auto" :class="currentPokemon.types[0].type.name">
      <a @click="showModal">
        <div class="pokename">
          <span class="name">{{currentPokemon.name}}</span>
          <span class="number">#{{number}}</span>
        </div>
      </a>
        <ul class="type-tag">
            <li :class="type.type.name" v-for="type in currentPokemon.types" :key="type.slot">{{type.type.name}}</li>
        </ul>
        <div class="pokeimg">
          <img :src="currentPokemon.sprites.other['official-artwork'].front_default" alt="image">
        </div>
    </div>
</template>

<script>

export default {
  name: 'Pokecard',
  props: {
      number: Number,
  },
  methods: {
    showModal: function(){
      this.$emit('nameClicked', this.number);
    }
  },
  computed: {
    currentPokemon() {
      return this.$store.getters.fetchPokemon(this.number);
    }
  }
}
</script>
<style lang="scss" scoped>
  .pokecard{
    border: 3px solid #666;
    border-radius: 8px;
    padding: 10px;
      .pokename{
        color: #fff;
        font-weight: bold;
        text-transform: capitalize;
        font-size: 1.25rem;
        position: relative;
        .number{
          font-size: 0.8rem;
          position: absolute;
          top: -7px;
          right: -2px;
        }
      }
  }
  .pokeimg{
    background: #fff;
    margin-top:20px;
    border-radius: 4px;
    border: 1px solid #666;
  }
</style>