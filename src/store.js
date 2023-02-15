import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        staffList:[],
        

    },
    getters:{
        allStaff(state){
            return state.allStaff.length
        },
        
    },
    mutations:{
        ADDSTAFF(state,payload){
            state.allStaff.push(payload)
        },
        
        
    },
    actions:{
        addStaffs(context,payload){

            const addNewStaff={
                name: payload.name,
                email: payload.email,
                phone:payload.phone,
                address:payload.phone
            }
            context.commit("ADDSTAFF",addNewStaff)
        },
        
    },
    
    
})

export default store