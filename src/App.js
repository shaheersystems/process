import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Banner from "./components/Banner";
import AddBtn from "./components/AddBtn";
import Empty from "./components/Empty";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Overlay from "./components/Overlay";
import { useState } from "react";
function App() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [key, setKey] = useState(1);
  function modalHandler() {
    setModalShow(!modalShow);
  }
  const projectNameHandler = (e) => {
    setProjectName(e.target.value);
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
  };
  const linkHandler = (e) => {
    setLink(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setProjects([
      { id: key, project: projectName, description: desc, projectLink: link },
      ...projects,
    ]);
    setModalShow(!modalShow);
    setKey(key + 1);
  };
  const overlayHandler = () => {
    setModalShow(!modalShow);
  }
  return (
    <div className="App">
      <Overlay show = {modalShow ? "show" : "" } overlayHandler = {overlayHandler}></Overlay>
      <Navbar />
      <Container>
        <Banner />
        <Heading />
        {projects.length === 0 ? <Empty /> : <p>there are projects</p>}
        <Form
          showClass={modalShow ? "form-slider" : ""}
          projectNameHandler={projectNameHandler}
          descHandler={descHandler}
          linkHandler={linkHandler}
          submitHandler={submitHandler}
          projectName={projectName}
          desc={desc}
          link={link}
        />
      </Container>
      <AddBtn addProject={modalHandler} />
    </div>
  );
}

export default App;
