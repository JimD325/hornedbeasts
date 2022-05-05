import React from  "react";
import HornedBeast from "./HornedBeast";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




class Main extends React.Component {
  render() {
    return (

      
      <Container>
        <Row sm={2} md={3} lg ={4}> 
          {this.props.Beasts.map(beast  => (
            <Col>
              <HornedBeast
                key={beast._id} 
                title = {beast.title}
                imageURL = {beast.image_url}
                description = {beast.description}
                handleOpenModal={this.props.handleOpenModal}
              />
            </Col>

          ))}
        </Row>  
      </Container>
    )
  }
}

export default Main;

