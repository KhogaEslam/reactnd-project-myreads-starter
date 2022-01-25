import React from "react";
import CloseSearchButton from "./CloseSearchButton";
import SearchBooksInput from "./SearchBooksInput";

const SearchBar = (props) => {
  const { doSearch, doResetSearch } = props;

  return (
    <div className="search-books-bar">
      <CloseSearchButton doResetSearch={doResetSearch} />
      <SearchBooksInput doSearch={doSearch} />
    </div>
  );
};

export default SearchBar;
