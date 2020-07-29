import React from 'react';
import {connect, useDispatch} from "react-redux"
import {JokesStore} from "../Types/Index"

const Welcome = () => {


    return (
        <div>
            <h1>Welcome</h1>
            <input type="button"  value="Get a Joke"/>
        </div>
    );

}


// const mapState = (state: JokesStore) =>({
//     JokeState : state
// })

// const mapDispatch = {

// }


export default Welcome