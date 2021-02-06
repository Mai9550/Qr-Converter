import React, { Component } from "react";
import Form from "./form";
class QR extends React.Component {
  constructor(props) {
    super(props);
      
  }

  // fetch("https://qrtag.net/api/qr_12.svg?url=https://aws.random.cat/meow" )
  render() {
    const { catImageUrl } = this.props;
    const qrUrl = `https://qrtag.net/api/qr_12.svg?url=${catImageUrl}`; //Look up template literals if you don't know whats going on here.
    if (!catImageUrl) return <p>Oops, something went wrong!</p>;
    return <img className="QR" src={qrUrl} alt="qrtag" />;
  }
}
export default QR;
