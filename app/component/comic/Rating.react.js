/* import */
// import dependencies
import React, {Component} from 'react';

/* class */
class Rating extends Component {
  constructor() {
    super();
  }

  // component mount
  componentDidMount(){
    this.renderStars();
  }

  /* set rating*/
  setRating(newStars){
    console.log('--- st ',newStars);
    this.props.setRating(newStars);
  }

  /* render stars */
  renderStars(){
    // get stars
    var {actual, max} = this.props.data;
    var stars = [];
    // actual
    for(var i = 1; i <= max; i++){
      var isChecked = (i <= actual)? 'checked' : '';
      stars.push(
        <span className={"item-stars " + isChecked} key={i} onClick={this.setRating.bind(this, i)}>
          <i className="fa fa-star"></i>
        </span>
      )
    }

    // retrun
    return stars;
  }

  // render html
  render() {
    var {actual} = this.props.data;

    // return data
    return (<div className="container-stars">
      <div className="rating-stars">
        {this.renderStars()}
        <div className="actual-rating">({actual})</div>
      </div>
    </div>)
  }
}

export default Rating;
