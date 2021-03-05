import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store"



function App() {
  return (

    <div className="main-container">
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </Provider>
    </div>


  );
}

export default App;