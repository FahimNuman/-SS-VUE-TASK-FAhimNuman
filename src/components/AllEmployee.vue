<template>
    <v-card
      max-width="450"
      class="mx-auto"
    >
    <v-layout row wrap mt-2>
        <v-flex class="text-sm-right pa-2" xs12 sm6>
          <v-btn elevation="4" @click="findStaff=true;" class="btnInfo" large>View All Staffs</v-btn>

        </v-flex>
        <v-flex class="text-sm-left pa-2" xs12 sm6>
          <v-btn elevation="4"  @click="findStaff=false;"  class="btnInfo" large>View All Admins</v-btn>
        </v-flex>
      </v-layout>
  
      <v-container>
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
                  <v-card-title class="text-h5">
                    Phone: {{staff.phone}}
                  </v-card-title>
  
                  <v-card-subtitle>mail: {{staff.email}}</v-card-subtitle>
  
                  <v-card-actions>
                    <v-btn
                      class="ms-2"
                      variant="outlined"
                      size="small"
                    >
                    Name: {{staff.name}}
                    </v-btn>
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