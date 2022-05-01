import React from  'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';





class HornedBeast extends React.Component {
  constructor(props){
    // Super() is used to call the constructor of its parent class. this is required when we need to access some variables of its parent class. 
    super(props);
    this.state ={
      votes:0,
      modalOn:false
    }
  }

  handleClick = () => {
    this.setState({votes: this.state.votes+1});
  }
  handleClose =()=>{
    this.setState({modalOn:false});
  }
  handleShow = () =>{
    this.setState({modalOn:true});
  }

  render() {
    return (
      
        <Card style={{ width: '18rem' }} bg ={'dark'} text ={'warning'} >
          <Card.Img 
            variant="top" 
            src= {this.props.imageURL} 
            onClick = {this.handleShow} 
            alt ={this.props.description}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button variant="secondary" onClick={this.handleClick}>Smash that like button {this.state.votes}💗</Button>
            <SelectedBeast 
              src= {this.props.imageURL} 
              handleClose ={this.handleClose}
              description ={this.props.description}
              handleShow={this.state.modalOn}
            />
          </Card.Body>
        </Card>
    )
  }
}

export default HornedBeast;


