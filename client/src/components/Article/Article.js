import React, {Component} from 'react'
import { Card, CardText, CardBody, Button, CardHeader, CardFooter } from 'reactstrap';
import API from '../../utils/API';
import './Article.css';

class Article extends Component {
  

  handleSaveArticle = (event) => {
    event.preventDefault();
    const article = {
      headline: this.props.headline,
      snippet: this.props.snippet,
      url: this.props.src
    }
    API.saveArticle(article).then(response => {
      console.log('data saved');
    })
  }

  render() {
    return (
        <div className="container">
        <Card className="card">
          <CardHeader className="panel" tag="h4">
            {this.props.headline}
          </CardHeader>
            <CardBody className="cardBody">
              <form onSubmit={this.handleSaveArticle}>
                <CardText value={this.props.snippet}>{this.props.snippet}</CardText>
                <Button outline color="warning"type="submit">SAVE ARTICLE</Button> { }
                <Button outline color="warning"href={this.props.src}>GO TO ARTICLE</Button>
              </form>
            </CardBody>
            <CardFooter className="text-muted">Published Date: {this.props.pubDate.substring(0,10)}</CardFooter>
          </Card>
        </div>
    );
  }


}

export default Article;
