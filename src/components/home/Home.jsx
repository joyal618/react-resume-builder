import "./Home.css";
import NavBar from "../nav-bar/NavBar";
import ResumeForm from "../resume-form/ResumeForm";


function Home() {
  return (
    <div className="Home">
      <NavBar />
      <ResumeForm />
    </div>
  );
}

export default Home;