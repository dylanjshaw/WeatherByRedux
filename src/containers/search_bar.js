import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);

      this.state = { term: '' };

      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
      //if callback function references 'this', it must be bound to 'this'
      // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forecast in your favorite cities."
          className="form-control"
          value = {this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
  }

  export default connect(null, mapDispatchToProps)(SearchBar);


// SearchBar will track user events via input
// It will pass this information along to Redux
// Therefore, it needs to be a container


// SearchBar will have a controlled field: value of the input is set by the state of the
  // component... not the other way around
