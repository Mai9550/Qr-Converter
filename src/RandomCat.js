import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
class RandomCat extends React.Component {
  constructor(props) {
    super(props);
  }

  // Now the image url is passed in this component doesn't need state or fetch and loads the image jsut liek a normal image

  render() {
    const { catImageUrl } = this.props;
    if (!catImageUrl) return <p>Oops, something went wrong!</p>;
    return <Image src={catImageUrl} className="cat img-responsive" alt="random cat photo"  fluid thumbnail/>;
  }
}
export default RandomCat;
