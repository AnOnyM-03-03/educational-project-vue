<template>
    <div>
        <h1>Car id {{id}}</h1>
        <!-- <router-link tag="button" class="btn btn-sm btn-info" to="/cars">
            <span>back</span>
        </router-link> -->
        <button class="btn btn-dark" @click="goBackCars">back</button>
        <hr>
        <!-- <router-link tag="button" class="btn btn-info" :to="'/car/' + id + '/full'">info</router-link> -->
        <router-link 
        tag="button" 
        class="btn btn-info" 
        :to="{name:'carFull', params:{id:id}, query:{name:'yahoo', year:2000}, hash:'#scroll'}">
        info
        </router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
        // id: this.$router.currentRoute.params['id'],
        id: this.$route.params['id']
    }
  },
  watch:{
      $route (toR, fromR) {
          this.id = toR.params['id']
      }
  },
  methods:{
      goBackCars(){
          this.$router.push('/cars')
      }
  },
  beforeRouteLeave(to, fromR, next){
      console.log('beforeRouteLeave');
    if(window.confirm('Are you sure you want to leave?')){
        next()
    }else(
        next(false)
    )      
  }
}
</script>

<style>
</style>
