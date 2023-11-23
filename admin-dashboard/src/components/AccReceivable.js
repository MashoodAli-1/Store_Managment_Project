import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CutomerTable from "./CustomerTable.js";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomerRecord,
  getAllCustomerRecord,
  updateCustomerRecord,
  deleteCustomerRecord,
} from "../features/Data/CustomerSlice";

export default function CustomerForm() {
  const dispatch = useDispatch();
  const { header, data } = useSelector((state) => state.customer);
  const [searchValue, setSearchValue] = useState("");
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    cnic: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer.action) {
      dispatch(createCustomerRecord(customer));
      Clear();
    } else if (customer.action === "edit") {
      console.log(customer);
      dispatch(updateCustomerRecord(customer));
      dispatch(getAllCustomerRecord());
      dispatch(getAllCustomerRecord());
      Clear();
    } else {
      dispatch(deleteCustomerRecord(customer.id));
      dispatch(getAllCustomerRecord());
      dispatch(getAllCustomerRecord());
      Clear();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      // Step 2: Update the handleChange function to handle changes in the search input field.
      setSearchValue(value);
    } else {
      setCustomer({ ...customer, [name]: value });
    }
  };

  // Step 3: Implement the SearchCompany function to filter the data based on the search input and display only matching records.
  const SearchCustomer = () => {
    console.log(`search data = ${data}`);
    return data.filter((item) => {
      console.log(`item = ${item[1]}`);
      return item[1].toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  const Clear = () => {
    setCustomer({ name: "", phone: "", address: "", cnic: "" });
    setSearchValue("");
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 4 }}>
      <CardContent>
        <Typography variant="h6">Add New Customer</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Customer Name"
            variant="outlined"
            size="small"
            name="CustomerName"
            value={customer.name}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Items Data"
            variant="outlined"
            size="small"
            name="ItemsData"
            value={customer.name}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Received Amount"
            variant="outlined"
            size="small"
            name="ReceivedAmount"
            type="number"
            value={customer.phone}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Current Receive"
            variant="outlined"
            size="small"
            name="CurrentReceive"
            value={customer.address}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ marginRight: 5, marginTop: 2 }}
          >
            Add
          </Button>
          {customer.action === "edit" && (
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
          {customer.action === "delete" && (
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
      </CardContent>
      <Divider sx={{ my: 1 }} />
      <CardContent sx={{ marginTop: 2 }}>
        <CutomerTable
          data={searchValue ? SearchCustomer() : data}
          header={header}
          setCustomer={setCustomer}
        />
      </CardContent>
    </Card>
  );
}
