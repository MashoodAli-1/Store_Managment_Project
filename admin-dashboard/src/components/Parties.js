import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TableData from "./TableData";

export default function Parties() {
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
        <Typography variant="h6">Add New Party</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            name="name"
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            size="small"
            name="phone"
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            name="address"
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Cnic"
            variant="outlined"
            size="small"
            name="cnic"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginRight: 5, marginTop: 2 }}
          >
            Add
          </Button>
        </form>
      </CardContent>
      <Divider sx={{ my: 1 }} />
      <CardContent sx={{ marginTop: 2 }}>
        <TableData />
      </CardContent>
    </Card>
  );
}
