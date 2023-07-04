import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { useTheme } from "next-themes";

const DataTable = (props) => {
  const { theme } = useTheme();
  const light = {
    palette: {
      mode: "light",
    },
  };
  const dark = {
    palette: {
      mode: "dark",
    },
  };
  const options = {
    filter: true,
    download: true,
    print: true,
    filterType: "dropdown",
    // responsive: "standard",
    fixedHeader: true,
    fixedSelectColumn: true,
    // tableBodyHeight: '44em',
    tableBodyHeight: "maxheight",
    selectableRowsHideCheckboxes: true,
    pagination: true,
    rowsPerPage: 50,
    rowsPerPageOptions: [5, 10, 20, 50, 100],
  };

  return (
    <>
      <ThemeProvider
        theme={theme === "dark" ? createTheme(dark) : createTheme(light)}
      >
        <MUIDataTable
          title={props.title}
          data={props.data}
          columns={props.columns}
          options={options}
        />
      </ThemeProvider>
    </>
  );
};

export default DataTable;
