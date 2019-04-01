//  import dependencies
import React, {Component} from 'react';

/* visor */
class Visor extends Component {

  // initial contructor
  constructor() {
    super();
  }

  // render html
  render() {

    // props
    var {
      img,
      alt
    } = this.props.data;

    var image = (img)
      ? img
      : global.conf.mediaApi + "img/test/loading.gif";
    // image
    return (<article className="visorContainer">
      <img src={image} alt={alt}/>
    </article>)
  }
}

// export info
export default Visor;
