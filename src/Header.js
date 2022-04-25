import React from "react";
// jsx is an extension of JS, it is built into JS. It gives us the ability to write HTML inside of JS. 
class Header extends React.Component {
  render () {
    // when you are returning multiple lines of JSX, you MUST wrap JSX in parenthesis.
    return (
      // code block goes in here
      // if you have multiple lines of JSX, you must have a parent element. In app.js its div, here we are using a fragment, which ONLY exists in react. Does NOT exist on the DOM, it only exisits to be a parent element for what is inside of it. 
      <>
        <h1>Horned Beasts</h1>
        
      </>
    )
  }
}

export default Header;
// This exports the Header class so that it can be imported in other places such as app.js. Once on app.js, you would also have to import it. ie, tell header to export itself anywhere that wants it, and tell app.js that it wants it. 