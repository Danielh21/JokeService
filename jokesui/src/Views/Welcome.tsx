import React from 'react';
import {connect, useDispatch} from "react-redux"
import {IJokesState, getRandomJoke} from "../Reducer/JokesReducer"
import {AppDispatch, useAppDispatch, RootState} from '../AppStore'

const Welcome = () => {

    const


    return (
        <div>
            <h1>Welcome</h1>
            <input type="button" onClick={getRandomJoke} value="Get a Joke"/>
        </div>
    );

}


// const mapState = (state: IJokesState) =>({
//     JokeState : state
// })

// const mapDispatch = {

// }


export default Welcome