
import React from 'react';

export default class ImageWall extends React.Component{
    constructor(props) {
        super(props);
        this.change=this.change.bind(this);
      }
    
      render() {
            const listeImage =this.props.images.map(image=><img src={image.image} alt={image.texte} title={image.texte} key={image.image}/>);
            const view =<div id="mur">{listeImage}</div>
            return view;
      }

      change(){
            this.imageChanged.bind(this);
      }
}