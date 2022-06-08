import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Banner from './components/Banner';
import AddBtn from './components/AddBtn';
import Empty from './components/Empty';
import Heading from './components/Heading';
import Form from './components/Form';
import { useState } from 'react';
function App() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [modalShow, setModalShow] = useState(false);
  function modalHandler() {
    setModalShow(!modalShow);
    console.log(projects.length);
  }
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Banner />
        <Heading />
        {projects.length === 0 ? <Empty /> : <p>there are projects</p>}
        <Form showClass={modalShow ? "form-slider" : ""} />
      </Container>
      <AddBtn addProject={modalHandler} />
    </div>
  );
}

export default App;
