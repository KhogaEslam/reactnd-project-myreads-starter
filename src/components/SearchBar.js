import React from "react";
import CloseSearchButton from "./CloseSearchButton";
import SearchBooksInput from "./SearchBooksInput";

const SearchBar = (props) => {
  return (
    <div className="search-books-bar">
      <CloseSearchButton />
      <SearchBooksInput />
    </div>
  );
};

export default SearchBar;
