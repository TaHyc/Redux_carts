import { useSelector } from 'react-redux'

export const useCounter=()=>{
    const count = useSelector(state => state.counter.value)
    return {count}
}