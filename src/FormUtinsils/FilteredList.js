import { useEffect, useState, useMemo } from "react";

export const FilterData = ({ saveFormData, setFilteredDataList }) => {
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

  //optimize filtering function using useMemo hook
  const filterDataList = useMemo(() => {
    return (fromDate, toDate) => {
      const filteredData = saveFormData.filter((data) => {
        const dataDate = new Date(data.date);
        const fromDateObj = new Date(fromDate);
        const toDateObj = new Date(toDate);
        return (
          (!fromDate || dataDate >= fromDateObj) &&
          (!toDate || dataDate <= toDateObj)
        );
      });
      console.log("Check optimize speed");
      setFilteredDataList(filteredData);
    };
  }, [saveFormData, setFilteredDataList]);

  //render the updated data when filtered or not
  useEffect(() => {
    filterDataList(filterFrom, filterTo);
  }, [filterFrom, filterTo, filterDataList]);

  return (
    <div className="row mx-auto mt-5 d-" style={{ maxWidth: "400px" }}>
      <div className="col">
        <label htmlFor="from">From:</label>
        <input
          id="from"
          className="form-control"
          type="date"
          value={filterFrom}
          onChange={handleFilterFromChange}
        />
      </div>
      <div className="col">
        <label htmlFor="to">To:</label>
        <input
          id="to"
          className="form-control"
          type="date"
          value={filterTo}
          onChange={handleFilterToChange}
        />
      </div>
    </div>
  );
};
