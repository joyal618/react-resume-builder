import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { Route, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <div className="main-container">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>
    </div>

  );
}

export default App;