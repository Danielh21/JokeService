import { combineReducers } from "redux";
// import  from "./JokesReducer"
// import from "./UserReducer"


export enum ActionTypes {
    GET_RANDOM_JOKE =  'GET_RANDOM_JOKE',
    INSERT_NEW_JOKE = 'INSERT_NEW_JOKE',
    UPDATE_USER = 'UPDATE_USER'
}


// const rootReducer = combineReducers({
//     IJokesState,
//     IUserState
// });

// export type AppState = ReturnType<typeof rootReducer>;