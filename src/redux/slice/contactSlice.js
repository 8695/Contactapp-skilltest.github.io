import {createSlice, nanoid} from "@reduxjs/toolkit";

const contactSlice= createSlice({
    name: 'contactSlice',
    initialState:{
        data:[]
        },

        /* reducer */
        reducers:{
            createContact:(state,action)=>{
                state.data.push({...action.payload,id: nanoid()});
            },

            deleteContact:(state,action)=>{
                state.data=state.data.filter(item=> action.payload!==item.id)
                alert("delele successfully")

            },
        
    }
            
        
})
//export the reducer
export default contactSlice.reducer;

/* export actions */
export  const{createContact,deleteContact}=contactSlice.actions;
