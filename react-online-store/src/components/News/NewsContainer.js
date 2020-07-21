import React from 'react';
import { connect } from 'react-redux';
import News from './News';
import { requestNews } from './../../redux/reducers/newsReducer';
import { Spinner } from 'react-bootstrap';

class NewsContainer extends React.Component {

  

  componentDidMount() {
    this.props.requestNews()
  }

  render() {
    return (
      !this.props.isNewsReady ? <Spinner animation="border" /> :
        <News news={this.props.news}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    isNewsReady: state.newsPage.isNewsReady
  }
}

export default connect(mapStateToProps, { requestNews })(NewsContainer);