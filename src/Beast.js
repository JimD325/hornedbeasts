import React from "react";

class Beast extends React.Component {
  render () {
    
    return (
      <>
       <h2>{this.props.title}</h2>
       <p>{this.props.description}</p>
       <img src="{this.props.imageurl}" title="this.props.title" alt="this.props.description"></img>
        
      </>
    )
  }
}

export default Beast;



