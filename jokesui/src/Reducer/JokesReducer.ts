import { JokesActions } from '../Actions/JokesActions';
import { Reducer } from 'redux'
import { JokesStore  } from "../Types/Index";
import { GET_RANDOM_JOKE, INSERT_NEW_JOKE } from "../Const/JokesConst";


export const MyReducer: Reducer = (
  state: JokesStore,
  action: JokesActions
  ): JokesStore => {
    switch (action.type) {
      case GET_RANDOM_JOKE:
        return {
          firstLine: "Random Joke",
          secondLine: "Random Random Ramdom",
          primary_author: state.primary_author
        }
        case "INSERT_NEW_JOKE": {
          return action.joke
        }
        default:
          return state
    }
  }




export default function JokesReducer(state: JokesStore = initalState, action: JokesActions) : JokesStore {
      switch (action.type) {
      case GET_RANDOM_JOKE:
        return {
          firstLine: "Random Joke",
          secondLine: "Random Random Ramdom",
          primary_author: state.primary_author
        }
      case INSERT_NEW_JOKE:
        return action.joke;
      default:
        return state
    }
}


export const initalState: JokesStore = {
    firstLine: "Empty",
    secondLine: "Empty a",
    primary_author: "God"
}