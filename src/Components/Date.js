import React, { useState } from "react";
import { useContext } from "react";
import { BlogComponents } from "./Content";

export const DataListFilter = () => {
  const { saveFormData } = useContext(BlogComponents);

  const [filteredDataList, setFilteredDataList] = useState(saveFormData);
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");

  const handleFilterFromChange = (e) => {
    const filterValue = e.target.value;
    setFilterFrom(filterValue);

    filterDataList(filterValue, filterTo);
  };

  const handleFilterToChange = (e) => {
    const filterValue = e.target.value;
    setFilterTo(filterValue);

    filterDataList(filterFrom, filterValue);
  };

  const filterDataList = (fromDate, toDate) => {
    const filteredData = saveFormData.filter((data) => {
      const dataDate = new Date(data.date);
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);
      return (
        (!fromDate || dataDate >= fromDateObj) &&
        (!toDate || dataDate <= toDateObj)
      );
    });
    setFilteredDataList(filteredData);
  };

  return (
    <div>
      <div>
        <label htmlFor="filterFrom">From: </label>
        <input
          type="date"
          id="filterFrom"
          value={filterFrom}
          onChange={handleFilterFromChange}
        />
      </div>
      <div>
        <label htmlFor="filterTo">To: </label>
        <input
          type="date"
          id="filterTo"
          value={filterTo}
          onChange={handleFilterToChange}
        />
      </div>

      <ul>
        {filteredDataList.map((data) => (
          <li key={data.id}>{data.date}</li>
        ))}
      </ul>
    </div>
  );
};
