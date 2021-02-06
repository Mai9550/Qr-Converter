import React, { Component } from "react";
import RandomCat from "./RandomCat.js";
import QR from "./QR.js";
import Form from "./form.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import LottieAnimation from './Lottie';
import home from './Animation/dev.json';


class BooksApp extends Component {
 
  
  state = {
    showCatImage: false,
    showQrCode: false,
    catImageUrl: "",
    qrUrl: ""
};

handleFetchRandomImage = () => {
    fetch("https://aws.random.cat/meow")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          catImageUrl: data.file,
          showCatImage: true,
          qrUrl: `https://qrtag.net/api/qr_12.svg?url=${data.file}` 
        });
      })
      .catch((error) => console.log(error));
  };

 handleShowQrCode = () => {
    this.setState({ showQrCode: true });
  };



  render() {
    const { showCatImage, showQrCode, catImageUrl, qrUrl } = this.state;

    return (
      <div style={{display:'block',alignItems:'center'}}>
    
       <LottieAnimation lotti={home} height={300} width={300} />
     
      <div className="app" style={{width:300,height:300,display:'block',margin:'auto'}}>
        <div className="first">
          
          {showCatImage && <RandomCat style={{display:'block',alignItems:'center'}} catImageUrl={catImageUrl} />}

          <Button className="catButton "  onClick={this.handleFetchRandomImage}>
            Generate Cat
          </Button>
        </div>
        <div className="second">
          {showQrCode && <QR catImageUrl={catImageUrl} qrUrl={qrUrl}/>}

          <Button className="QRButton" onClick={this.handleShowQrCode}>
            Generate QR
          </Button>

        </div>
      <div>
        <Form qrUrl={qrUrl}/>
      </div>
      </div>
      </div>
    );
  }
}


export default BooksApp;