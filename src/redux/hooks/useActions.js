import {bindActionCreators} from '@reduxjs/toolkit'
import {useMemo} from 'react';
import {useDispatch } from 'react-redux'
import {toggleFavorites, wiewResult } from '../favorites/favoritesSlice'
import * as userActions from '../user/user.actoins'

const rootActions={
    toggleFavorites,
    wiewResult,
    ...userActions,
}


export const useActions = () => {
const dispatch = useDispatch()

return useMemo(()=>
bindActionCreators(rootActions,
dispatch), [dispatch])
}