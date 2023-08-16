import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ComboBox from "react-responsive-combo-box";
import SalesTable from "./SalesTable";
import "react-responsive-combo-box/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { addSales, deleteSales, editSales } from "../features/Data/SalesSlice";

export default function StockForm() {
  const data1 = [];
  const data2 = [];
  const data3 = [];
  const data = [];

  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.data);
  const items = useSelector((state) => state.stock.data);
  const saleItem = useSelector((state) => state.sale.data);
  const { totalBill, remainingAmount, recievedAmount } = useSelector(
    (state) => state.sale
  );
  const [tableData, setTableData] = useState([]);
  const header = [
    "Item Name",
    "Size",
    "price",
    "Quantity",
    "Rec Amount",
    "Status",
  ];
  const [searchValue, setSearchValue] = useState("");
  const [item, setItem] = useState({
    itemName: "",
    size: "",
    price: "",
    quantity: "",
    recamount: "",
    status: "",
    action: "add",
  });
  console.log(customers, items);
  for (var customer of customers) {
    data1.push(customer[1]);
  }
  for (var itm of items) {
    data2.push(itm[1]);
    data3.push(itm[2]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.action === "add") {
      delete item.action;
      const dataArray = Object.values(item);
      console.log(dataArray);
      data.push(dataArray);
      dispatch(addSales(data));
      console.log(`data in form is = ${data}`);
      setTableData(data);
      Clear();
    } else if (item.action === "edit") {
      delete item.action;
      const dataArray = Object.values(item);
      dispatch(editSales(dataArray));
      Clear();
    } else if (item.action === "delete") {
      delete item.action;
      const dataArray = Object.values(item);
      dispatch(deleteSales(dataArray));
      Clear();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearchValue(value);
    } else {
      setItem({ ...item, [name]: value });
    }
  };

  //   const SearchStock = () => {
  //     return data.filter((item) => {
  //       return item[1].toLowerCase().includes(searchValue.toLowerCase());
  //     });
  //   };

  const Clear = () => {
    setItem({
      itemName: "",
      size: "",
      price: "",
      quantity: "",
      recamount: "",
      status: "",
      action: "add",
    });
    setSearchValue("");
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 1 }}>
      <CardContent>
        <Typography variant="h6">Add New Item</Typography>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <ComboBox
              options={data1}
              placeholder="Customer Name"
              enableAutocomplete
              name="name"
              onSelect={(option) => {
                console.log(`option = ${option}`);
                // setItem({
                //   ...item,
                //   name: option,
                // });
              }}
            />
            <ComboBox
              options={data2}
              enableAutocomplete
              placeholder="Item Name"
              name="item"
              onSelect={(option) => {
                console.log(`option = ${option}`);
                setItem({
                  ...item,
                  itemName: option,
                });
              }}
            />
            <ComboBox
              options={data3}
              enableAutocomplete
              placeholder="Item Size"
              name="size"
              onSelect={(option) => {
                console.log(`option = ${option}`);
                setItem({
                  ...item,
                  size: option,
                });
              }}
            />
          </div>
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            size="small"
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            size="small"
            name="price"
            type="number"
            value={item.price}
            onChange={handleChange}
          />

          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Received Amount"
            variant="outlined"
            size="small"
            name="recamount"
            type="number"
            value={item.recamount}
            onChange={handleChange}
          />
          <br />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Status
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="cash"
                name="status"
                control={<Radio />}
                onChange={handleChange}
                label="on cash"
              />
              <FormControlLabel
                value="account"
                name="status"
                control={<Radio />}
                onChange={handleChange}
                label="on account"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginRight: 5, marginTop: 2 }}
          >
            Add
          </Button>
          {item.action === "edit" && (
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
          {item.action === "delete" && (
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
        <SalesTable
          data={saleItem}
          header={header}
          setItem={setItem} // Updated to use "item" instead of "customer"
        />
      </CardContent>
      <Divider sx={{ my: 2 }} />
      <CardContent sx={{ marginTop: 2 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12em",
          }}
        >
          <Typography variant="h5">Total Bill: {totalBill}</Typography>
          <Typography variant="h5">
            Received Amount: {recievedAmount}
          </Typography>
          <Typography variant="h5">
            Remaining Amount: {remainingAmount}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
