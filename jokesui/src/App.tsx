import React from 'react';
import {createStore, combineReducers } from 'redux'
import './App.css';
import { Provider } from "react-redux";
import {JokesActions} from './Actions/JokesActions';
import JokesReducer from "./Reducer/JokesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {JokesStore} from './Types/Index';
// import combinedStore from './AppStore';
import Welcome from './Views/Welcome';
import * as CONST from './Const/JokesConst'; 

function App() {

  const rootReducer = combineReducers({
    JokesReducer
  });

   const store = createStore(rootReducer, {}, composeWithDevTools());


  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <Welcome />
      </div>
    </Provider>
  );
}

export default App;
