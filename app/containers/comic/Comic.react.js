/* import dependencies */
import React, {Component} from 'react';
import {connect} from 'react-redux';

// import components
import Header from '../../component/comic/Header.react';
import Visor from '../../component/comic/Visor.react';
import Controls from '../../component/comic/Controls.react';
import Title from '../../component/comic/Title.react';
import Rating from '../../component/comic/Rating.react';

// import actions
import {getRandomComic, setRating} from '../../actions/ComicActions';

// visor component
class Comic extends Component {
  constructor(props) {
    super(props)
  }

  /* after render */
  componentDidMount() {
    this.getRandomComic();
  }

  /* action to get random comic */
  getRandomComic() {
    this.props.getRandomComic();
  }

  /* set rating*/
  setRating(newStars){
    this.props.setRating(newStars);
  }

  /* send HTML */
  render() {
    return (<section className="hero is-fullheight">
      <div className="hero-head">
        <Header/>
      </div>
      <div className="hero-body mainVisorContainer">
        <div className="container">
          <Title data={this.props.actualComic}/>
          <Visor data={this.props.actualComic}/>
          <Rating data={this.props.rating} setRating={this.setRating.bind(this)}/>
        </div>
      </div>
      <div className="hero-foot footerButtons">
        <Controls getRandomComic={this.getRandomComic.bind(this)}/>
      </div>
    </section>)
  }
}

// actions to props
var actionToProps = () => {
  return {getRandomComic, setRating}
}

// get states from store
var stateToProps = (store) => {
  return {
    actualComic: store.main.comic.actualComic,
    rating: store.main.comic.rating,
  }
}

// export component with redux
export default connect(stateToProps, actionToProps())(Comic)
