import { createSlice } from '@reduxjs/toolkit'
import { getUsersById } from './user.actoins'


export const userSlice = createSlice({
name: 'users',
initialState: {
    isLoading: false,
    error: null,
    user: {}
},
reducers:{},
extraReducers: builder=>{
    builder
    .addCase(getUsersById.pending,
        state=>{
        state.isLoading=true
    })
    .addCase(getUsersById.fulfilled,
        (state, actions)=>{
        state.isLoading=false
        state.user =actions.payload
    })
    .addCase(getUsersById.rejected,
        (state, actions)=>{
        state.isLoading=false
        state.error =actions.payload.error
        state.user={}
    })
}

})

export const { extraReducers } = userSlice.actions

export default userSlice.reducer
