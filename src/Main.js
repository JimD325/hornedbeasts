import React from  "react";
import BeastImage from "./BeastImage";
import { Container, Row, Col } from 'react-bootstrap';


class Main extends React.Component {
  render() {
    const beastImg = this.props.imageURLs;
    return (

      
      <>
        
        <BeastImage src={beastImg[0].image_url} description={beastImg[0].description} title={beastImg[0].title}/>
        <BeastImage src={beastImg[1].image_url} description={beastImg[1].description} title={beastImg[1].title}/>
        <BeastImage src={beastImg[2].image_url} description={beastImg[2].description} title={beastImg[2].title}/>
        <BeastImage src={beastImg[3].image_url} description={beastImg[3].description} title={beastImg[3].title}/>
        <BeastImage src={beastImg[4].image_url} description={beastImg[4].description} title={beastImg[4].title}/>
        <BeastImage src={beastImg[5].image_url} description={beastImg[5].description} title={beastImg[5].title}/>
        <BeastImage src={beastImg[6].image_url} description={beastImg[6].description} title={beastImg[6].title}/>
        <BeastImage src={beastImg[7].image_url} description={beastImg[7].description} title={beastImg[7].title}/>
        <BeastImage src={beastImg[8].image_url} description={beastImg[8].description} title={beastImg[8].title}/>
        <BeastImage src={beastImg[9].image_url} description={beastImg[9].description} title={beastImg[9].title}/>
        <BeastImage src={beastImg[10].image_url} description={beastImg[10].description} title={beastImg[10].title}/>
        <BeastImage src={beastImg[11].image_url} description={beastImg[11].description} title={beastImg[11].title}/>
        <BeastImage src={beastImg[12].image_url} description={beastImg[12].description} title={beastImg[12].title}/>
        <BeastImage src={beastImg[13].image_url} description={beastImg[13].description} title={beastImg[13].title}/>
        <BeastImage src={beastImg[14].image_url} description={beastImg[14].description} title={beastImg[14].title}/>
        <BeastImage src={beastImg[15].image_url} description={beastImg[15].description} title={beastImg[15].title}/>
        <BeastImage src={beastImg[16].image_url} description={beastImg[16].description} title={beastImg[16].title}/>
        <BeastImage src={beastImg[17].image_url} description={beastImg[17].description} title={beastImg[17].title}/>
        <BeastImage src={beastImg[18].image_url} description={beastImg[18].description} title={beastImg[18].title}/>
        <BeastImage src={beastImg[19].image_url} description={beastImg[19].description} title={beastImg[19].title}/>



      </>
    )
  }
}

export default Main;

