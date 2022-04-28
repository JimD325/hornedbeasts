import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImageURLs from "./data.json";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title={"Federal Beast Inspector"} />
        {/* main is our component,  the first imageURLs is the attribute name, second is variable which is imported above.*/}
        <Main 
          imageURLs={ImageURLs}
          
          imageDescription={ImageURLs.description} 
        />
        <Footer text={""} />
      </div>
    );
  }
}

export default App;