// import dependencies
import React, {Component} from 'react';

/* class */
class Controls extends Component {
  constructor() {
    super();
  }

  // render html
  render(){
    return (
        <div className="container contentButton">
          <button className="button" onClick={this.props.getRandomComic.bind(this)}>Random comic <i className="fas fa-random"></i></button>
        </div>
    )
  }
}

export default Controls;
