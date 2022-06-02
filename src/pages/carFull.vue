<template>
  <div>
   <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima culpa doloribus quas ipsum perferendis, nam unde ullam officiis aspernatur molestias eaque ducimus ad alias. Molestiae nulla ut ullam? Recusandae, facilis.</h4>
   <p>word params name: {{$route.query.name}}</p>
   <!-- <p>word params year: {{$route.query.year}}</p> -->
   <p>computed params: {{year}}</p>

   <div class="scroll"></div>
   <h3 id="scroll">Hello from bottom</h3>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed:{
      year(){
          return this.$route.query.year
      }
  },    
  beforeRouteEnter(to,fromR, next){
      next()
  }
}
</script>

<style scoped>
.scroll{
    width: 100px;
    height: 2000px;
    background-color: bisque;
}
</style>
