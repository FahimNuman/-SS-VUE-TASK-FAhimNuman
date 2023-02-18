import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        staffList:[
            
                  {
                    name:'Marjia Moli',
                    phone:'01782496285',
                    email:'moli90@gmail.com',
                    image:'https://cdn-icons-png.flaticon.com/512/4974/4974985.png'
                  },

                  {
                    name:'Touhidul Islam',
                   phone:'0191864796',
                   email:'islam440@gmail.com',
                   image:'https://cdn-icons-png.flaticon.com/512/1870/1870038.png'
                 
                  } 
                  ],
   

    adminList:[

              { 
                   name:'Fahim Numan',
                   phone:'01918647966',
                   email:'fahiomnuman87@gmail.com',
                   image:'https://cutewallpaper.org/24/employee-png/best-employee-icon-download-in-flat-style.png'
              }
                  ]
    },
    getters:{
        totalStaff(state){
            return state.staffList.length
        },
        totalAdmin(state){
            return state.adminList.length
        },
    },
    mutations:{
        ADD_STAFF(state,payload){
            state.staffList.push(payload)
        },
        REMOVE_STAFF(state,payload)
        {
            state.staffList.splice(payload,1);
        },
        
    },
    actions:{
        addStaffs(context,payload){

            const newStaff={
                name: payload.name,
                email: payload.email,
                phone:payload.phone
            }
            context.commit("ADD_STAFF",newStaff)
        },
        removeStaff(context,payload){
           context.commit("REMOVE_STAFF",payload);
        }
    },
    
    
})

export default store