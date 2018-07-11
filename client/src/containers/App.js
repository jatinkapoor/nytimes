import React, { Component } from 'react';
import NavBar from '../components/Navbar/Navbar';
import ArticlesSearchForm from '../components/ArticlesSearchForm/ArticleSearchForm';
import axios from 'axios';
import Article from '../components/Article/Article';

class App extends Component {

  state = {
    results: []
  }

  handleSubmit = (formValues) => {
    const query = formValues.topic;
    const sDate = formValues.startDate.format('YYYYMMDD');
    const eDate = formValues.endDate.format('YYYYMMDD');
    const numOfTerms = formValues.numOfResults;
    const BASEURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
    const param = `?begin_date=${sDate}&end_date=${eDate}&page=0&sort=newest`
    const APIKEY = "&apikey=5d9b390e3c2a4f1f884bbba6ce8c7171";
    axios.get(BASEURL + query + param + APIKEY).then((response) => {
      const myArray = response.data.response.docs.slice(0, numOfTerms);
      this.setState({ results: myArray });
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">  
          <ArticlesSearchForm onFormSubmit={this.handleSubmit} />
          {
            this.state.results.map(article =>
              <Article
                key={article._id}
                src={article.web_url}
                headline={article.headline.main}
                snippet={article.snippet}
                pubDate={article.pub_date}
              />)
            }
        </div>
      </div>
    );
  }
}

export default App;
