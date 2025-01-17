import React, { Component } from "react";

class BooksShelfChanger extends Component {
  state = {
    value: this.props.shelf,
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.moveBook(this.props.book, event.target.value);
  };

  render() {
    const { shelf } = this.props;

    return (
      <div className="book-shelf-changer">
        <select defaultValue={shelf} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BooksShelfChanger;
