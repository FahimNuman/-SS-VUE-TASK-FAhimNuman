import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/FrontPage.vue'),
  },
  {
    path: "/addstaff",
    name: "addstaff",
    component: () => import('../components/AddStaff.vue')
  },
  {
    path: "/updatestaff/:index",
    name: "updatestaff",
    props:true,
    component: () => import('../components/UpdateStaff.vue'),
   
  },
  {
    path: "/allstaffs",
    name: "allstaffs",
    component: () => import('../components/AllStaffs.vue'),
   
  },
  {
    path: "/staffdetail/:index",
    name: "staffdetail",
    props:true,
    component: () => import('../components/StaffDetail.vue'),
   
  },
  {
    path: "/frontpage",
    name: "frontpage",
    component: () => import('../components/FrontPage.vue')
  },

]

const router = new VueRouter({
  mode: "history", //html file history mode
  base: process.env.BASE_URL,
  routes
})

export default router;
