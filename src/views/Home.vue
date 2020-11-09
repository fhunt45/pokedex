<template>
  <div class="home">
    <Pokegrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokegrid from '@/components/Pokegrid.vue'


export default {
  name: 'Home',
  components: {
    Pokegrid,
  }
}
</script>

<style lang="scss" scoped>
.home{
  padding: 12px;
}
</style>