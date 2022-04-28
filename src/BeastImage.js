import React from  'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class BeastImage extends React.Component {
  constructor(props){
    // Super() is used to call the constructor of its parent class. this is required when we need to access some variables of its parent class. 
    super(props);
    this.state ={
      votes:0
    }
  }

  handleClick = () => {
    this.setState({votes: this.state.votes+1});
    
  }

  render() {
    return (
      
      
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
          <Card.Body>
          </Card.Body>
          <Button variant="secondary" onClick={this.handleClick}>Smash that like button {this.state.votes}💗</Button> 
        </Card>
      

      

        
        
      </>
      
    )
  }
}

export default BeastImage;


