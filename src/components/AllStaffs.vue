<template>
  <v-card
    max-width="490"
    class="mx-auto"
    color="#f74219"
  >
  <v-layout row wrap mt-2>
      <v-flex class="text-sm-right pa-2" xs12 sm6>
        <v-btn elevation="4" @click="findStaff=true;" class="btnInfo" large>View All Staffs</v-btn>

      </v-flex>
      <v-flex class="text-sm-left pa-2" xs12 sm6>
        <v-btn elevation="4"  @click="findStaff=false;"  class="btnInfo" large>View All Admins</v-btn>
      </v-flex>
    </v-layout>

    <v-container >
      <v-flex xs12 sm6 offset-sm3>
          <h2 v-if="findStaff==true">Staff List</h2>
          <h2 v-else>Admin List</h2>
        </v-flex>
      <v-row dense>
        

        <v-col cols="12">
          <v-card
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between" v-for="(staff,index) in employees" 
          :key="index">
              <div>
               

                <v-card-title>
                            <div class="text-left">
                              <h5 class="white--text">Name: {{staff.name}}</h5>
                              <h5 class="white--text ">mail: {{staff.email}}</h5>
                              <h5 class="white--text ">Phone: {{staff.phone}}</h5>
                            </div>
                          </v-card-title>
                          <v-btn
                            v-bind:to="'/staffdetail/' + index"
                           v-if="findStaff==true"
                          >
                          Details
                            <v-icon> mdi-chevron-right</v-icon>
                          </v-btn>
                          <v-btn 
                          v-bind:to="'/updatestaff/' + index"
                          v-if="findStaff==true"
                          color="rgb(0, 150, 87)"
                          class="white--text"
                          tag="span"
                          @click="updateIndex(index)"
                          >
                          update</v-btn>

                          <v-btn @click="removeStaff(index)" 
                          router to="/AllStaffs" 
                          class="white--text"
                            color="rgb(226, 45, 45)"
                          v-if="findStaff==true">Delete</v-btn>

                <v-card-actions>
                  
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
              <v-img  class="ma-2"
                          :src="staff.image"
                        >
                        </v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        
      </v-row>
    </v-container>
  </v-card>
</template>

<script> 
export default{
  data(){
     return{ 
      findStaff:true
   }
  },
  computed: {
  employees(){
      if(this.findStaff==true){
          return this.$store.state.staffList;
      }
      else{
          return this.$store.state.adminList;
      }
  },
  },
  methods:{
    goToStaff(index){
      this.$router.push('/staffdetail/'+index);
    },
    removeStaff(index){
      if (confirm("Are you sure you want to delete this Staff?")) {
        this.$store.dispatch('removeStaff',index);
      }
    },
    updateIndex(index){
      if(this.findStaff==true){
        return  this.$store.state.staffList[index];
      }
    }
}
}
</script>