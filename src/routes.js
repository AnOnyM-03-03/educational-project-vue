import VueRouter from "vue-router";
// import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Car from "./pages/Car";
import carFull from "./pages/carFull";
import ErrorCmp from "./pages/Error";


//lazy loading
const Cars = resolve => {
  require.ensure(["./pages/Cars.vue"], () => {
    resolve(require("./pages/Cars.vue"));
  });
};

export default new VueRouter({
  routes: [
    {
      path: "", //localhost:8080
      component: Home
    },
    {
      path: "/cars", //localhost:8080/cars
      component: Cars
    },
    {
      path: "/car/:id",
      component: Car,
      children: [
        {
          path: "full", //localhost:8080/car/id/full
          component: carFull,
          name: "carFull",
          beforeEnter(to, from, next) {
            next();
          }
        }
      ]
    },
    {
      path: "/none",
      redirect: "/"
    },
    {
      path: "*",
      component: ErrorCmp
    }
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
});
