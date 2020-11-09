<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
.card-background {
  &.normal {
    background-color: #A8A878;
  }

  &.fire {
    background-color: #F08030;
  }

  &.water {
    background-color: #6890F0;
  }

  &.electric {
    background-color: #F8D030;
  }

  &.grass {
    background-color: #78C850;
  }

  &.ice {
    background-color: #98D8D8;
  }

  &.ground {
    background-color: #E0C068;
  }

  &.flying {
    background-color: #A890F0;
  }

  &.ghost {
    background-color: #705898;
  }

  &.rock {
    background-color: #B8A038;
  }

  &.fighting {
    background-color: #C03028;
  }

  &.poison {
    background-color: #A040A0;
  }

  &.psychic {
    background-color: #F85888;
  }

  &.bug {
    background-color: #A8B820;
  }

  &.dark {
    background-color: #705848;
  }

  &.steel {
    background-color: #B8B8D0;
  }

  &.dragon {
    background-color: #7038F8;
  }

  &.fairy {
    background-color: #F1A8EC;
  }  
}
.type-tag{
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
    &.normal {
      background-color: #A8A878;
      border: 1px solid #6D6D4E;
    }

    &.fire {
      background-color: #F08030;
      border: 1px solid #9C531F;
    }

    &.water {
      background-color: #6890F0;
      border: 1px solid #445E9C;
    }

    &.electric {
      background-color: #F8D030;
      border: 1px solid #A1871F;
    }

    &.grass {
      background-color: #78C850;
      border: 1px solid #4E8234;
    }

    &.ice {
      background-color: #98D8D8;
      border: 1px solid #638D8D;
    }

    &.ground {
      background-color: #E0C068;
      border: 1px solid #927D44;
    }

    &.flying {
      background-color: #A890F0;
      border: 1px solid #6D5E9C;
    }

    &.ghost {
      background-color: #705898;
      border: 1px solid #493963;
    }

    &.rock {
      background-color: #B8A038;
      border: 1px solid #786824;
    }

    &.fighting {
      background-color: #C03028;
      border: 1px solid #7D1F1A;
    }

    &.poison {
      background-color: #A040A0;
      border: 1px solid #682A68;
    }

    &.psychic {
      background-color: #F85888;
      border: 1px solid #A13959;
    }

    &.bug {
      background-color: #A8B820;
      border: 1px solid #6D7815;
    }

    &.dark {
      background-color: #705848;
      border: 1px solid #49392F;
    }

    &.steel {
      background-color: #B8B8D0;
      border: 1px solid #787887;
    }

    &.dragon {
      background-color: #7038F8;
      border: 1px solid #4924A1;
    }

    &.fairy {
      background-color: #F1A8EC;
      border: 1px solid #4924A1;          
    }
  }        
}
</style>
