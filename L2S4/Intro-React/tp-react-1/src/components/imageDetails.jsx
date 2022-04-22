
import React from 'react';

export default class ImageDetails extends React.Component{
    constructor(props) {
        super(props);
      }
    
      render() {
            const img= <img src={this.props.image} alt={this.props.texte}/>
            const legende=<div className="legende">{this.props.texte}</div>
            const view =<div id="details">{img}{legende}</div>
            return view;
      }
}