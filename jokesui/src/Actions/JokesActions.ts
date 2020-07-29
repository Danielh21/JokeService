import {JokesStore} from '../Types/Index';
import * as ActionTypes from '../Const/JokesConst';

interface GetRandomJokeAction {
    type: typeof ActionTypes.GET_RANDOM_JOKE
}

interface InsertNewJokeAction  {
    type: typeof ActionTypes.INSERT_NEW_JOKE,
    joke: JokesStore
}


export function getRandomJoke(): GetRandomJokeAction {
    return {
        type: ActionTypes.GET_RANDOM_JOKE
    }
}

export function insertJoke(firstLine: string, secondLine: string): InsertNewJokeAction{

    const NewJoke: JokesStore = {
        firstLine: firstLine,
        secondLine: secondLine,
        primary_author: "Daniel"
    }

    return {
        type: ActionTypes.INSERT_NEW_JOKE,
        joke: NewJoke
    }
}

export type JokesActions = InsertNewJokeAction | GetRandomJokeAction;
