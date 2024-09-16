"use client";
import React from "react";
import { useState } from "react";
import SearchMenuFacture from "./SearchMenuFacture";

const SearchBar = () => {
  const handleSearch = () => {};
  const [manuFacture, setManuFacture] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenuFacture
          manuFacture={manuFacture}
          setManuFacture={setManuFacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
