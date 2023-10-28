import React, { useEffect, useState } from "react";

const SearchResults = ({ data }) => {

  return (
    data.map((product, index) => {
      return (
      <div className="container" style={{ marginBottom: 50 }} key={index}>
        <label htmlFor="">{product.title}</label>
      </div>
       )
    })
  )

};

export default SearchResults;
