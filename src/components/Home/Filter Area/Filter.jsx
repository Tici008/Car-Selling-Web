import React from "react";
import "./Filter.css";
import { Input, Space } from "antd";
import Search from "../../LOGO/Search";

function Filter({ filterOpacity1, filterOpacity2, filterOpacity3 }) {
  return (
    <div className="filter-container">
      <div className="filter-nav">
        <div>
          <div className="filter-menu" style={{ opacity: filterOpacity1 }}>
            All
          </div>
          <div className="filter-line"></div>
        </div>
        <div className="filter-menu" style={{ opacity: filterOpacity2 }}>
          New
        </div>
        <div className="filter-menu" style={{ opacity: filterOpacity3 }}>
          Used
        </div>
      </div>

      <div className="filter-form">
        <div className="filter-search">
          <div className="filter-searchIcon">
            <Search />
          </div>
          <input
            className="filter-search-box"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
