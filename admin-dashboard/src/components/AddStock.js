import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TableData from "./TableData";
import Autocomplete from "@mui/material/Autocomplete";

export default function AddStock() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  // React.useEffect(() => {
  //   setTableData({
  //     header: ["Customer Name", "Cnic", "Address", "Phone"],
  //     data: [["mashood", "33202123", "Jhang", "03137047282"]],
  //   });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 4 }}>
      <CardContent>
        <sTypography variant="h6">Add New Customer</sTypography>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              sx={{ marginRight: 5, marginTop: 2 }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              name="name"
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              size="small"
              sx={{
                marginRight: 5,
                marginTop: 2,
                width: 195,
              }}
              renderInput={(params) => (
                <TextField {...params} label="Catagory" />
              )}
            />
            <TextField
              sx={{ marginRight: 5, marginTop: 2 }}
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              size="small"
              name="quantity"
            />
            <TextField
              sx={{ marginRight: 5, marginTop: 2 }}
              id="outlined-basic"
              label="Price"
              variant="outlined"
              size="small"
              name="price"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginRight: 5, marginTop: 2 }}
            >
              Add
            </Button>
          </div>
        </form>
      </CardContent>
      <Divider sx={{ my: 1 }} />
      <CardContent sx={{ marginTop: 2 }}>
        <TableData />
      </CardContent>
    </Card>
  );
}
