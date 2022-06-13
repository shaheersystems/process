import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Banner from "./components/Banner";
import AddBtn from "./components/AddBtn";
import Empty from "./components/Empty";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Overlay from "./components/Overlay";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  // To handle array of object[projects]
  const [projects, setProjects] = useState([]);
  // to handle name of project
  const [projectName, setProjectName] = useState("");
  // to handle description of the project
  const [desc, setDesc] = useState("");
  // to handle the link to the project repository
  const [link, setLink] = useState("");
  // to handle the modal [form]
  const [modalShow, setModalShow] = useState(false);
  // to assign different id;
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
    setDesc("");
    setProjectName("");
    setLink("");
  };
  const overlayHandler = () => {
    setModalShow(!modalShow);
  };
  const projectRenderer = () => {
    return (
      <div className="cards">
        {projects.map((item) => {
          return (
            <Card
              name={item.project}
              link={item.projectLink}
              desc={item.description}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div className="App">
      <Overlay
        show={modalShow ? "show" : ""}
        overlayHandler={overlayHandler}
      ></Overlay>
      <Navbar />
      <Container>
        <Banner title="Welcome back Shaheer!!" />
        <Heading heading="Dashboard" />
        {projects.length !== 0 ? projectRenderer() : <Empty />}
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
