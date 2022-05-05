import React from "react";
import './App.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import beasts from "./data.json";
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      showModal: false,
      selectedBeast: {},
    }
  }
  
  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleOpenModal =(beastName) => {
    const selectedBeast = beasts.find(beast => beast.title === beastName);
    this.setState({showModal: true, selectedBeast});
  }


  render() {
    

    return (
      <Container>
        <Header title={"Gallery of Horns"} />
        <Main 
          Beasts={beasts}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast 
          show={this.state.showModal} 
          handleClose={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
        
        <Footer text={"Created by Jim Doyle"} />
      </Container>
    );
  }
}

export default App;