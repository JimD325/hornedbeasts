import React from 'react';
// 'react' above is our dependency react that makes our entire application a react application. 
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// react.component changes class app into a component class app. React.component IS a class that exists within the component library. 
class App extends React.Component {
  // when you define a class app in react, you MUST then use the render method, which is built into react, NOT JS. 
  render () {
    return (
      <div className="App">
        <Header/>
        <Main />
        <Footer />
      </div>
      
    );
  }
}

export default App;
// this IS a component, everything from the line above to line one. 