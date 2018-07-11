import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './ArticleSearchForm.css';

class ArticlesSearchForm extends Component {

  state = {
    startDate: moment().subtract(1, 'day'),
    endDate: moment(),
    topic: '',
    numOfResults: 1,
    collapse: true 
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  handleStartChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  handleEndChange = (date) => {
    this.setState({
      endDate: date
    })
  }

  handleInputChange = (event) => {
    this.setState({
      topic: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
  }

  handleNumberOfResults = (event) => {
    this.setState({numOfResults: event.target.value})
  }

  render() {
    return (
      <div className="container">
        <Button className="toggleButton" color="primary" onClick={this.toggle} size="lg" block style={{ marginBottom: '1rem' }}>
          Search NewYork Times Articles
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <div className="container justify-center">
            <Form onSubmit={this.handleFormSubmit} className="form-border">
              <FormGroup>
                <Label for="searchTerm">Search Term</Label>
                <Input type="text" name="text" id="searchTerm" onChange={this.handleInputChange} value={this.state.topic} />
              </FormGroup>
              <FormGroup>
                <Label for="searchNumberOfRecords">Number of Records</Label>
                <Input onChange={this.handleNumberOfResults} value={this.state.numOfResults} type="select" bsSize="sm">
                  <option>1</option>
                  <option>4</option>
                  <option>10</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Start Date</Label>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={(date) => this.handleStartChange(date)}
                  todayButton={"Start Date"}
                />
              </FormGroup>
              <FormGroup>
                <Label>End Date</Label>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={(date) => this.handleEndChange(date)}
                  todayButton={"End Date"}
                />
              </FormGroup>
              <Button color="info">SUBMIT</Button>
            </Form>
        </div> 
        </Collapse>
      </div>
    );
  }
}

export default ArticlesSearchForm;
