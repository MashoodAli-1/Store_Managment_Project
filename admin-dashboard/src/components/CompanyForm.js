import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TableData from "./TableData";
import { useDispatch, useSelector } from "react-redux";
import {
  createCompanyRecord,
  getAllCompanyRecord,
  updateCompanyRecord,
  deleteCompanyRecord,
} from "../features/Data/CompanySlice";
export default function CompanyForm() {
  const dispatch = useDispatch();
  const { header, data } = useSelector((state) => state.company);
  const [searchValue, setSearchValue] = useState("");
  const [company, setCompany] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company.action) {
      dispatch(createCompanyRecord(company));
      Clear();
    } else if (company.action === "edit") {
      console.log(company);
      dispatch(updateCompanyRecord(company));
      dispatch(getAllCompanyRecord());
      dispatch(getAllCompanyRecord());
      Clear();
    } else {
      dispatch(deleteCompanyRecord(company._id));
      dispatch(getAllCompanyRecord());
      dispatch(getAllCompanyRecord());
      Clear();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      // Step 2: Update the handleChange function to handle changes in the search input field.
      setSearchValue(value);
    } else {
      setCompany({ ...company, [name]: value });
    }
  };

  // Step 3: Implement the SearchCompany function to filter the data based on the search input and display only matching records.
  const SearchCompany = () => {
    console.log(`search data = ${data}`);
    return data.filter((item) => {
      console.log(`item = ${item[1]}`);
      return item[1].toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  const Clear = () => {
    setCompany({ name: "", phone: "", address: "" });
    setSearchValue("");
  };
  return (
    <Card sx={{ minWidth: 275, marginTop: 4 }}>
      <CardContent>
        <Typography variant="h6">Add New Company</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Company"
            variant="outlined"
            size="small"
            name="name"
            value={company.name}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            size="small"
            name="phone"
            type="number"
            value={company.phone}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            name="address"
            value={company.address}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginRight: 5, marginTop: 2 }}
          >
            Add
          </Button>
          {company.action === "edit" && (
            <>
              <Button
                type="submit"
                variant="contained"
                sx={{ marginRight: 5, marginTop: 2 }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                sx={{ marginRight: 5, marginTop: 2 }}
                onClick={() => {
                  Clear();
                }}
              >
                Clear
              </Button>
            </>
          )}
          {company.action === "delete" && (
            <>
              <Button
                type="submit"
                variant="contained"
                sx={{ marginRight: 5, marginTop: 2 }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                sx={{ marginRight: 5, marginTop: 2 }}
                onClick={() => {
                  Clear();
                }}
              >
                Clear
              </Button>
            </>
          )}
        </form>
        <TextField
          sx={{ marginRight: 5, marginTop: 2 }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
          name="search"
          value={searchValue}
          onChange={handleChange}
        />
        <Button variant="contained" sx={{ marginRight: 5, marginTop: 2 }}>
          Search
        </Button>
      </CardContent>
      <Divider sx={{ my: 1 }} />
      <CardContent sx={{ marginTop: 2 }}>
        <TableData
          data={searchValue ? SearchCompany() : data}
          header={header}
          setCompany={setCompany}
        />
      </CardContent>
    </Card>
  );
}
