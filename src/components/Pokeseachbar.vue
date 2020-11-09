<template>
    <div>
        <input type="text" v-model="seachString" placeholder="Search"/> 
    </div>
</template>

<script>
import { debounce } from "lodash";

export default {
  name: 'Pokeseachbar',
  data(){
    return{
        seachString: ''
    }
  },
  created(){
      this.debounceSearch = debounce(this.checkString, 1000);
  },
  watch: {
      seachString() {
          this.debounceSearch();
    }
  },
  methods: {
      checkString() {
          this.$emit('inputPoke', this.seachString);
      }
  }
}
</script>

<style lang="scss" scoped>
</style>
