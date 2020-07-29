import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface IJokesState {
    firstLine: string;
    secondLine: string;
    primary_author: string;
}

// export enum ActionTypes {
//     GET_RANDOM_JOKE =  'GET_RANDOM_JOKE',
//     INSERT_NEW_JOKE = 'INSERT_NEW_JOKE'
// }


const initalState: IJokesState = {
    firstLine: "Empty",
    secondLine: "Empty a",
    primary_author: "God"
}

export const JokesSlice = createSlice({
    name: "Jokes Slice",
    initialState: initalState,
    reducers: {
        getRandomJoke: (IJokesState, action : PayloadAction<string, string>) =>{
             IJokesState.firstLine = action.payload;
        }
    }
})

export const {getRandomJoke} = JokesSlice.actions