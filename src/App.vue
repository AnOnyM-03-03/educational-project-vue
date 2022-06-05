<template>

  <div class="container pt-2" >
      <div class="form-group mb-2">
          <label for="name">Car name</label>
          <input type="text" id="name" class="form-control" v-model.trim="carName">
      </div>
 
      <div class="form-group mb-2">
          <label for="year">Car year</label>
          <input type="text" id="year" class="form-control" v-model.number="carYear">
      </div>

      <button class="btn btn-success" @click="createCar">create car</button>
      <button class="btn btn-primary" @click="loadCars">load car</button>
      <hr>
        <ul class="list-group">
            <li class="list-group-item"
            v-for="car of cars" :key="car.id">
            <strong>{{car.name}}</strong> - {{car.year}}</li>
        </ul>
  </div>
    
</template>

<script>
export default {
  data () {
    return {
        carName: '',
        carYear:2011,
        cars:[],
        resource: null
    }
  },
  methods:{
      createCar(){
          const car = {
              name: this.carName,
              year: this.carYear
          }
        //   this.$http.post('http://localhost:3000/cars', car)
        //   .then(resp =>{
        //       return resp.json()
        //       .then(newCar =>{
        //           console.log(newCar);
                  
        //       })
              
        //   })
        this.resource.save({}, car)
          this.carName = '',
          this.carYear = ''
      },
      loadCars(){
        //   this.$http.get('http://localhost:3000/cars')
        //   .then(resp =>{
        //       return resp.json()
        //       .then(cars =>{
        //           this.cars = cars
        //       })
              
        //   })
        this.resource.get().then(resp =>{
            resp.json()
            .then(car =>{
                this.cars = car
            })
        })
      }
  },
  created(){
      this.resource = this.$resource('cars')
  }
}
</script>

<style>
</style>
