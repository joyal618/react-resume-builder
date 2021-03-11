import React from 'react';
import "./Home.css";
// import NavBar from "../nav-bar/NavBar";
import ResumeForm from "../resume-form/ResumeForm";
// import ResumeTemplate from "../resume-template/ResumeTemplate"



function Home(props) {

  // const TemplateHandler = useRef();
  // const onButtonClick = () => {
  //   // `current` points to the mounted text input element
  //   TemplateHandler.current.onFormChange();
  // };

  return (
    <div className="Home">
      {/* <NavBar /> */}
      <ResumeForm />

      {/* <ResumeTemplate ref={TemplateHandler}/> */}
      {/* <button onClick={onButtonClick}>Focus the input</button> */}
    </div>
  );
}

export default Home;