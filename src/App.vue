<template>
    <div class="container">
        <form class="pt-3" @submit.prevent="onSubmit">
            <div class="form_group mb-3">
                <label for="email">Email</label>

                <input type="email"
                id="email"
                class="form-control"
                :class="{'is-invalid': $v.email.$error}"
                @blur="$v.email.$touch()"
                v-model="email"> 

                <div class="invalid-feedback" v-if="!$v.email.required">Введитe email</div>
                <div class="invalid-feedback" v-if="!$v.email.email">{{$v.email.$model}} не является email</div>
                <div class="invalid-feedback" v-if="!$v.email.uniqEmail">этот еиайл заня</div>
            </div>
            <div class="form_group mb-3">
                <label for="password">Password</label>

                <input type="password"
                id="password"
                class="form-control"
                :class="{'is-invalid': $v.password.$error}"
                @blur="$v.password.$touch()"
                v-model="password"> 

                <div class="invalid-feedback" 
                v-if="!$v.password.minLength">Min Length off password is {{$v.password.$params.minLength.min}}, Now it is{{password.length}}
                </div>
            </div>

            <div class="form_group mb-3">
                <label for="confirm">Confirm Password</label>

                <input type="password"
                id="confirm"
                class="form-control"
                :class="{'is-invalid': $v.confirmPassword.$error}"
                @blur="$v.confirmPassword.$touch()"
                v-model="confirmPassword"> 

                <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Passwords shout sashes</div>
            </div>

            <button 
            class="btn btn-success" 
            type="submit" 
            :disabled="$v.$invalid">Submit</button>

        </form>
    </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
        email:'',
        password:'',
        confirmPassword:''
    }
  },
  methods:{
      onSubmit(){
          this.email = ''
          this.password =''
          this.confirmPassword =''
      }
  },
  validations:{
    email:{
        required,
        email,
        uniqEmail: (newEmail) =>{

            if(newEmail === '')return true
            
            return new Promise((res,rej) =>{
                setTimeout(() =>{
                    const value= newEmail !== 'test@mail.ru'
                    res(value)
                },1000)
            })
        }
    },
    password:{
        minLength: minLength(6)
    },
    confirmPassword:{
        sameAs: sameAs('password')
    }
  }
}
</script>

<style>
</style>
