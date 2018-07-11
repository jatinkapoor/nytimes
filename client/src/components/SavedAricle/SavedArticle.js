import React, {Component} from 'react';
import { Card, CardText, CardBody, Button, CardHeader, CardFooter } from 'reactstrap';
class SavedArticle extends Component {

  render() {
    return (
      <div className="container">
        <Card className="card">
          <CardHeader tag="h4" className="panel">
            {this.props.headline}
          </CardHeader>
          <CardBody className="cardBody">
            <form onSubmit={this.handleSaveArticle}>
              <CardText>{this.props.snippet}</CardText>
              <Button outline onClick={() => this.props.deleteArticleHandler(this.props.id)} id={this.props.id} color="warning">DELETE ARTICLE</Button> {}
              <Button outline color="warning" href={this.props.url}>GO TO ARTICLE</Button>
            </form>
          </CardBody>
          <CardFooter className="text-muted">Saved Date: {this.props.date.substring(0, 10)}</CardFooter>
        </Card>
      </div>
    );
  }
}

export default SavedArticle;