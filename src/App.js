import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Beasts from "./data.json";
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header title={"Gallery of Horns"} />
        <Main 
          Beasts={Beasts}
        />
        <Footer text={"Created by Jim Doyle"} />
      </Container>
    );
  }
}

export default App;