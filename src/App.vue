<template>
  <v-app>
   <v-app-bar  app dark>
    <v-icon dark right>mdi-console</v-icon>
    <v-app-bar-title><router-link to="/" tag="span" style="cursor:pointer">StaffManagementSystem</router-link></v-app-bar-title>
     <v-spacer></v-spacer>
     <router-link to="/addstaff" tag="span"><v-btn plain>Add Staff</v-btn></router-link>

     <router-link  to="/allstaffs" tag="span"><v-btn plain>View Staff's</v-btn></router-link>
   </v-app-bar>
   <v-main>
       <v-container class="mt-1" fluid>
         <router-view></router-view>
       </v-container>
     </v-main>
 </v-app>
</template>

<script>
 export default {
 }
 </script>






<style lang="scss">
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}

nav {
 padding: 30px;

 a {
   font-weight: bold;
   color: #29333d;

   &.router-link-exact-active {
     color: #c9be2d;
   }
 }
}

.v-application--wrap{
 background-color: rgb(234, 235, 249);
}

.v-app-bar{
 background-color: rgb(57, 62, 117) !important;
 color:rgb(7, 107, 69) !important;
}
</style>
