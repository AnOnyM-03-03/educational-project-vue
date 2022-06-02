<template>
  <div>
    <h1>Cars page</h1>
    <ul>
        <router-link tag="li" v-for="car in 5" :key="car" :to="'/car/' + car"  >
        <a>car {{ car }}</a>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
}
</script>

<style>
</style>
