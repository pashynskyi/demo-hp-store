import React from 'react';
import { connect } from 'react-redux';
import NewsEdit from './NewsEdit';
import { editSelectedNews } from './../../redux/reducers/newsReducer';

class NewsEditContainer extends React.Component {

  goBack = this.goBack.bind(this);

  goBack() {
    this.props.history.goBack();
  }

  onSubmit = (NewsEditData) => {
    this.props.editSelectedNews(NewsEditData, this.props.token);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isSelectedNewsReady !== this.props.isSelectedNewsReady) {
      this.goBack()
    }
  }

  render() {
    return (
      <NewsEdit
        onSubmit={this.onSubmit}
        selectedNews={this.props.selectedNews}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    selectedNews: state.newsPage.selectedNews,
    token: state.loginPage.currentUser.token,
    isSelectedNewsReady: state.newsPage.isSelectedNewsReady
  }
}

export default connect(mapStateToProps, { editSelectedNews })(NewsEditContainer);