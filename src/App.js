import React from "react";
import './App.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import beasts from "./data.json";
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';



class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      showModal: false,
      selectedBeast: {},
      hornedBeasts: beasts,
    }
  }
  
  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleOpenModal =(beastName) => {
    const selectedBeast = beasts.find(beast => beast.title === beastName);
    this.setState({showModal: true, selectedBeast});
  }

  handleChange =(event) =>{
    event.preventDefault();
    if (event.target.value === "1") {
      let filterBeasts = beasts.filter(beast => beast.horns === 1);
      this.setState({hornedBeasts:filterBeasts});
    }
    else if (event.target.value === "2") {
      let filterBeasts = beasts.filter(beast => beast.horns === 2);
      this.setState({hornedBeasts:filterBeasts});
    }
    else if (event.target.value === "3") {
      let filterBeasts = beasts.filter(beast => beast.horns === 3);
      this.setState({hornedBeasts:filterBeasts});
    }
    else if (event.target.value === "100") {
      let filterBeasts = beasts.filter(beast => beast.horns === 100);
      this.setState({hornedBeasts:filterBeasts});
    }
  }

  render() {
    

    return (
      
      
      <Container>
        <Form>
            <label for ="optionValues"></label>
            <Form.Control onChange={this.handleChange} as="select">
              <option value="All">All Horns</option>
              <option value="1">1 horn</option>
              <option value="2">2 horns</option>
              <option value="3">3 horns</option>
              <option value="100">100 horns</option>
            </Form.Control>
        </Form>
        <Header title={"Gallery of Horns"} />
        <Main 
          Beasts={this.state.hornedBeasts}
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