import React from  'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      votes:0,
    }
  }

  handleClick = () => {
    this.setState({votes: this.state.votes+1});
  }

  liftStateToApp = () => {
    this.props.handleOpenModal(this.props.title);
  }

  render() {
    return (
      
      <Card style={{ width: '18rem' }} bg ={'dark'} text ={'warning'}  >
        <Card.Img 
          variant="top" 
          src= {this.props.imageURL}  
          onClick = {this.liftStateToApp}
          alt ={this.props.description}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <p>{this.props.description}</p>
              <p>Horn Count: {this.props.horns}</p>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button 
            variant="secondary" 
            onClick={this.handleClick}>Smash that like button {this.state.votes}💗</Button>
            
          </Card.Body>
        </Card>
    )
  }
}

export default HornedBeast;


