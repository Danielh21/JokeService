import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import {store} from './AppStore';
import Welcome from './Views/Welcome';


function App() {
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
