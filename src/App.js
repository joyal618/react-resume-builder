import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import ResumeForm from "../src/components/resume-form/ResumeForm";
import ViewResume from "../src/components/view-resume/ViewResume";

function App() {
  return (

    <div className="main-container">
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-resume" component={ResumeForm}/>
          <Route exact path="/view-resume" component={ViewResume} />
        </BrowserRouter>
      </Provider>
    </div>


  );
}

export default App;