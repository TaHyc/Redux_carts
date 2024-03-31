import {bindActionCreators} from '@reduxjs/toolkit'
import {useMemo} from 'react';
import {useDispatch } from 'react-redux'
import {toggleFavorites, wiewResult } from '../favorites/favoritesSlice'
import { increment, decrement } from '../counter/counterSlice'; 
import * as userActions from '../user/user.actoins'

const rootActions={
    toggleFavorites,
    wiewResult,
    ...userActions,
    increment,
    decrement
}


export const useActions = () => {
const dispatch = useDispatch()

return useMemo(()=>
bindActionCreators(rootActions,
dispatch), [dispatch])
}