<template>
    <div class="pokedetails card-background" :class="currentPokemon.types[0].type.name">
      <div class="main-info">
        <div class="initial">
          <div class="grid-x">
            <div class="cell large-8 medium-8 small-12">
              <span class="name">{{currentPokemon.name}}</span>
            </div>
            <div class="cell large-4 medium-4 small-12">
              <div class="measures">
                <span class="height"><b>Height:</b> {{(currentPokemon.height / 10)}} mts</span>
                <span class="weight"><b>Weight:</b> {{(currentPokemon.weight / 10)}} kg</span>
              </div>
            </div>
          </div>
          <ul class="type-tag">
              <li :class="type.type.name" v-for="type in currentPokemon.types" :key="type.slot">{{type.type.name}}</li>
          </ul>
        </div>
        <div class="img-list">
          <img class="main-img" :src="currentPokemon.sprites.other['official-artwork'].front_default" alt="" />
          <ul class="sprites">
            <li v-for="(sprite, index) in currentPokemon.sprites" :key="index" v-show="typeof(sprite)==='string'">
              <img :src="sprite" :alt="index">
            </li>
          </ul>
        </div>
        <div class="side-info">
          <p class="description">{{parsedDescription}}</p>
          <table class="statistics">
            <thead>
              <tr>
                <th>Stat</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(stat, index) in currentPokemon.stats" :key="index">
                <td class="stat-label">{{stat.stat.name}}</td>
                <td class="stat-value">{{stat.base_stat}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Pokedetails',
  components: {
  },
  props: {
    number: Number
  },
  computed: {
    parsedDescription: function(){
      let desc = this.currentPokemon.species_info.flavor_text_entries[0].flavor_text;
      desc = desc.replace(/\f/g, ' ');
      desc = desc.replace(/\n/g, ' ');
      return desc;
    },
    currentPokemon() {
      return this.$store.getters.fetchPokemon(this.number);
    }
  }
}
</script>

<style lang="scss" scoped>
  .pokedetails{
    padding: 35px;
    color: #fff;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    .main-info{
      position: relative;
      .initial{
        .name{
          font-size: 2rem;
          text-transform: capitalize;
        }
        .measures {
          span{
            display: block;
          }
        }
        .type-tag{
          position: absolute;
          clear: both;
          margin-left: 0;
          li{
            list-style: none;
            border-radius: 10px;
            text-align: center;
            color: #fff;
            max-width: 80px;
            padding: 0px 10px;
            margin: 10px 2px 10px 0;
            float:left;
            font-size: 0.65rem;
          }
        }
      }
      .img-list{
        .main-img{
          display: block;
          max-width: 50%;
          margin: 0 auto;
        }
        .sprites{
          list-style: none;
          margin: 0;
          li{
            float:left;
          }
        }
      }
      .side-info{
        clear: both;
        .description{
          font-size: 1rem;
        }
        .statistics{
          color: #888;
          .stat-label{
            text-transform: capitalize;
          }
        }
      }
    }
  }
</style>
