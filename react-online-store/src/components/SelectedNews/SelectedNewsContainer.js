import React from 'react';
import { connect } from 'react-redux';
import SelectedNews from './SelectedNews';
import { requestSelectedNews, deleteSelectedNews } from './../../redux/reducers/newsReducer';
import { Spinner } from 'react-bootstrap';

class SelectedNewsContainer extends React.Component {

  splittedPathname = this.props.location.pathname.split('/');
  newsId = this.splittedPathname[2];

  componentDidMount() {
    this.props.requestSelectedNews(this.newsId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isSelectedNewsReady !== this.props.isSelectedNewsReady) {
      this.props.requestSelectedNews(this.newsId)
    }
  }

  render() {
    return (
      !this.props.isSelectedNewsReady ? <Spinner animation="border" /> :
        <SelectedNews
          selectedNews={this.props.selectedNews}
          deleteSelectedNews={this.props.deleteSelectedNews}
          role={this.props.role}
        />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    selectedNews: state.newsPage.selectedNews,
    isSelectedNewsReady: state.newsPage.isSelectedNewsReady,
    role: state.loginPage.currentUser.role
  }
}

export default connect(mapStateToProps, { requestSelectedNews, deleteSelectedNews })(SelectedNewsContainer);