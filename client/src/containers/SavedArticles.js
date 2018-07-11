import React, { Component } from 'react';
import API from '../utils/API';
import NavBar from '../components/Navbar/Navbar';
import SavedArticle from '../components/SavedAricle/SavedArticle';

class SavedArticles extends Component {

  state = {
    savedArticles: []
  }

  componentWillMount() {
    API.getSavedArticles().then(response => {
      this.setState({ savedArticles: response.data });
    });
  }

  deleteArticleHandler = (id) => {
    const articles = [...this.state.savedArticles];
    API.deleteArticle(id).then(response => {
      const s = articles.filter(article => article._id !== id);
      this.setState({ savedArticles: s })
    }).catch(error => {
      console.log('deletion')
    });
  }

  render() {
    return (<div>
      <NavBar />
      {
        this.state.savedArticles.map(article => {
          return (
            <SavedArticle
              key={article._id}
              headline={article.headline}
              url={article.url}
              snippet={article.snippet}
              date={article.date}
              id={article._id}
              deleteArticleHandler={this.deleteArticleHandler}
            />
          );
        })
      }
    </div>)
  }
}

export default SavedArticles;