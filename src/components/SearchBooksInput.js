import React, { Component } from "react";

class SearchBooksInput extends Component {
  timer = null;

  state = {
    value: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    clearTimeout(this.timer);
    this.setState({ value });
    this.timer = setTimeout(() => {
      this.props.doSearch(value);
    }, 500);
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={this.state.value}
          placeholder="Search by title or author"
          onChange={this.handleChange}
          autoFocus
        />
      </div>
    );
  }
}

export default SearchBooksInput;
