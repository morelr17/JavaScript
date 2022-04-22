import React from 'react';

import '../assets/style/murImages.css';

import dataImages from '../data/dataImages.js';
import ImageWall from './ImageWall.jsx';
import ImageDetails from './ImageDetails.jsx';

/*
 define root component
*/
export default class ImageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state={image:"../images/image5.jpg",texte:"la plus belle...."};
  }

  render() {
    return (
      <div><ImageWall images={dataImages}/><ImageDetails image={this.state.image} texte={this.state.texte}/></div>      
    )
  }

  imageChanged(newImage,newTexte){
    this.setState({image:newImage ,texte:newTexte});
  }
}
