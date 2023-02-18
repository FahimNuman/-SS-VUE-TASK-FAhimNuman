<template>
   <v-app>
    <v-app-bar  app dark>
     <v-icon dark right>mdi-console</v-icon>
     <v-app-bar-title><router-link to="/" tag="span" style="cursor:pointer"><img src="https://i.pinimg.com/originals/ac/b9/3c/acb93ce28df132e59cdec3129a1da5a8.png
    " alt="" class="img"></router-link></v-app-bar-title>
      <v-spacer></v-spacer>
      <router-link to="/addstaff" tag="span"><v-btn plain>Add New Staff</v-btn></router-link>
      
      <router-link  to="/allstaffs" tag="span"><v-btn plain>All Staffs</v-btn></router-link>
      <a href="https://incandescent-naiad-3d6e5e.netlify.app/">
        <v-btn plain>Developer Info</v-btn>
    </a>
    <router-link to="/" tag="span"><v-btn plain>attendance</v-btn></router-link>
      <router-link to="/" tag="span"><v-btn plain>Blog</v-btn></router-link>
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
.img{
  height: 45px;
  width: 65px;
}
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
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-application--wrap{
  background-color: rgb(234, 235, 249);
}

.v-app-bar{
  background-color: rgb(16, 82, 33) !important;
  color:rgb(0, 255, 166) !important;
}
</style>
