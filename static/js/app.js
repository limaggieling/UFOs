function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
      //store value as text  
        cell.text(val);
        }
      );
    });
  }

  function handleClick() {
      // filter data by date
      //created a variable named date, store the UFO sightings that are filtered by the user-given date
      let date = d3.select("#datetime").property("value");
      // set default for table
      let filteredData = tableData;
      // add if statement to constrain return, if there is a date entered by user, then it will return the data, if not return default data
      //row => row.datetime === date means "Show only the rows where the date is equal to the date filter we created above."
      if (data) {
          filteredData = filteredData.filter(row => row.datetime === date);
      };
      //rebuild table with filtered data from date input given by user, if no date was given, the default table data will be returned
      buildTable(filteredData);
  };

 //listen for click
d3.selectAll("#filter-btn").on("click",handleClick);

//build the table when page loads
buildTable(tableData);