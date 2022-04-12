import {createSlice,createStore} from '@reduxjs/toolkit'


const initStat = { count: 0 , chowCounter:true} ;

const counterSlice = createSlice({
    name: 'counter',
    initialState: initStat,
    reducers: {
        increase: (state, action) => {
            state.count += action.payload;
        },
        decrease: (state, action) => {
            state.count -= action.payload;
        },
        toggleCounter: (state, action) => {
            state.chowCounter = !state.chowCounter;
        }
    }
});

export const {increase,decrease,toggleCounter}=counterSlice.actions;

export const store = createStore(counterSlice.reducer);
