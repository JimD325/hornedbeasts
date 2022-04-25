import React from "react";
import Beast from "./Beast";

class Main extends React.Component {
  render () {
    
    return (
      <>
       
       {/* below creates the beast component with corresponsding values for the properties below */}
        <Beast title = {'triceratops'} imageurl = {'cera from land before time'} description = {'the real one'} />
        <Beast title = {'Devil'} imageurl = {'Devil from Legend'} description = {'Angry Demon'}/>
      </>
    )
  }
}

export default Main;



