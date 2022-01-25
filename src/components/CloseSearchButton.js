import React from "react";
import { Link } from "react-router-dom";

const CloseSearchButton = (props) => {
  const { doResetSearch } = props;

  return (
    <Link to="/">
      <button className="close-search" onClick={doResetSearch}>
        Close
      </button>
    </Link>
  );
};

export default CloseSearchButton;
