import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchUsersById=userId=>
new Promise(resolve=>
 setTimeout(()=>resolve({
    id: 1,
    name: 'Max'
 }),1000)
)



export const getUsersById = createAsyncThunk('users/by-id',
async(userId,thunkApi)=>{
    try{
        const response = await
        fetchUsersById(userId)
        return response 
    }
    catch{
        thunkApi.rejectWithValue()
    }

})

