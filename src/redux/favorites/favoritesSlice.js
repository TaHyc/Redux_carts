import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers:{
    toggleFavorites: (state,{payload: recipe}) => {
        const isExists = state.some(r => r.id === recipe.id)
        if(isExists) {
         const index = state.findIndex(item => item.id=== recipe.id)
            if (index !== -1)
            state.splice(index, 1)}
        else state.push (recipe)
        },
    wiewResult:(state,{payload: recipe})=>{
        console.log('wiewResult is work')
    }
    }
})


// Action creators are generated for each case reducer function
export const { toggleFavorites,wiewResult } = favoritesSlice.actions

export default favoritesSlice.reducer