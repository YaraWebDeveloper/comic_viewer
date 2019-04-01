// import dependencies
import React, {Component} from 'react';

/* class */
class Controls extends Component {
  constructor() {
    super();
  }

  // render html
  render(){
    var {title} = this.props.data;

    return (
        <div className="titleComic">
          {title}
        </div>
    )
  }
}

export default Controls;
