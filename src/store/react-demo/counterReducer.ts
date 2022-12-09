import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import type { RootState,AppDispatch } from '../store'
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            console.log(action)
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount:number) => (dispatch:AppDispatch) => {
    setTimeout(() => {
        console.log(amount,dispatch)
        dispatch(incrementByAmount(amount))
    }, 1000)
}
export const selectCount = (state:RootState) => state.counterSlice.value

export default counterSlice.reducer
