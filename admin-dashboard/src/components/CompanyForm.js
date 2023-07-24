import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TableData from "./TableData";

export default function CompanyForm() {
  return (
    <Card sx={{ minWidth: 275, marginTop: 4 }}>
      <CardContent>
        <sTypography variant="h6">Add New Company</sTypography>
        <form>
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Company"
            variant="outlined"
            size="small"
            name="company"
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
