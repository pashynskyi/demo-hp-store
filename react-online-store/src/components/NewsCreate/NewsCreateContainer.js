import React from 'react';
import { connect } from 'react-redux';
import NewsCreate from './NewsCreate';
import { createNewNews } from '../../redux/reducers/newsReducer';

class NewsCreateContainer extends React.Component {

  goBack = this.goBack.bind(this);

  goBack() {
    this.props.history.goBack();
  }

  onSubmit = (newsCreateData) => {
    this.props.createNewNews(newsCreateData, this.props.token)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isNewsReady !== this.props.isNewsReady) {
      this.goBack()
    }
  }

  render() {
    return <NewsCreate onSubmit={this.onSubmit} />
  }
}

let mapStateToProps = (state) => {
  return {
    token: state.loginPage.currentUser.token,
    isNewsReady: state.newsPage.isNewsReady
  }
}

export default connect(mapStateToProps, { createNewNews })(NewsCreateContainer);