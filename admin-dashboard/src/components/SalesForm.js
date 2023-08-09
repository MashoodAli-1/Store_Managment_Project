// import * as React from "react";
// import { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import CardContent from "@mui/material/CardContent";
// import Divider from "@mui/material/Divider";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import TableData from "./TableData";
// import Autocomplete from "@mui/material/Autocomplete";

// export default function AddStock() {
//   const top100Films = [
//     { label: "The Shawshank Redemption", year: 1994 },
//     { label: "The Godfather", year: 1972 },
//     { label: "The Godfather: Part II", year: 1974 },
//     { label: "The Dark Knight", year: 2008 },
//     { label: "12 Angry Men", year: 1957 },
//     { label: "Schindler's List", year: 1993 },
//     { label: "Pulp Fiction", year: 1994 },
//   ];
//   // React.useEffect(() => {
//   //   setTableData({
//   //     header: ["Customer Name", "Cnic", "Address", "Phone"],
//   //     data: [["mashood", "33202123", "Jhang", "03137047282"]],
//   //   });
//   // }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Card sx={{ minWidth: 275, marginTop: 4 }}>
//       <CardContent>
//         <Typography variant="h6">Add New Item</Typography>
//         <form onSubmit={handleSubmit}>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <TextField
//               sx={{ marginRight: 5, marginTop: 2 }}
//               id="outlined-basic"
//               label="Name"
//               variant="outlined"
//               size="small"
//               name="name"
//             />
//             <TextField
//               sx={{ marginRight: 5, marginTop: 2 }}
//               id="outlined-basic"
//               label="Size"
//               variant="outlined"
//               size="small"
//               name="size"
//             />
//             <TextField
//               sx={{ marginRight: 5, marginTop: 2 }}
//               id="outlined-basic"
//               label="Name"
//               variant="outlined"
//               size="small"
//               name="name"
//             />
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={top100Films}
//               size="small"
//               sx={{
//                 marginRight: 5,
//                 marginTop: 2,
//                 width: 195,
//               }}
//               renderInput={(params) => (
//                 <TextField {...params} label="Catagory" />
//               )}
//             />

//             <TextField
//               sx={{ marginRight: 5, marginTop: 2 }}
//               id="outlined-basic"
//               label="Price"
//               variant="outlined"
//               size="small"
//               name="price"
//             />
//             <TextField
//               sx={{ marginRight: 5, marginTop: 2 }}
//               id="outlined-basic"
//               label="Quantity"
//               variant="outlined"
//               size="small"
//               name="quantity"
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               sx={{ marginRight: 5, marginTop: 2 }}
//             >
//               Add
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//       <Divider sx={{ my: 1 }} />
//       <CardContent sx={{ marginTop: 2 }}>
//         <TableData />
//       </CardContent>
//     </Card>
//   );
// }

import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import StockTable from "./StockTable.js"; // Updated to use StockTable
import Autocomplete from "@mui/material/Autocomplete";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createItemRecord, // Updated to use createItemRecord from stockSlice
  getAllItemRecord, // Updated to use getAllItemRecord from stockSlice
  updateItemRecord, // Updated to use updateItemRecord from stockSlice
  deleteItemRecord, // Updated to use deleteItemRecord from stockSlice
} from "../features/Data/StockSlice"; // Updated to use StockSlice

export default function StockForm() {
  const data1 = [];

  const [searchValue, setSearchValue] = useState("");
  const [item, setItem] = useState({
    name: "",
    size: "",
    catagory: selectedCatagory, // Updated "catagory" to "category"
    price: "",
    quantity: "",
  });
  console.log(data1, catagories);
  for (var catagory1 of catagories) {
    console.log(catagory1[1]);
    data1.push(catagory1[1]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearchValue(value);
    } else {
      setItem({ ...item, [name]: value }); // Updated to use "item" instead of "customer"
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
      category: "",
      price: "",
      quantity: "",
    });
    setSearchValue("");
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 4 }}>
      <CardContent>
        <Typography variant="h6">Add New Item</Typography>{" "}
        {/* Updated the heading */}
        <form onSubmit={handleSubmit}>
          <ComboBox
            options={data1}
            enableAutocomplete
            placeholder="Customer Name"
            name="name"
            onSelect={(option) => {
              console.log(`option = ${option}`);
              setItem({
                ...item,
                catagory: option,
              });
            }}
          />
          <ComboBox
            options={data1}
            enableAutocomplete
            placeholder="Item Name"
            name="item"
            onSelect={(option) => {
              console.log(`option = ${option}`);
              setItem({
                ...item,
                catagory: option,
              });
            }}
          />
          <ComboBox
            options={data1}
            enableAutocomplete
            placeholder="Item Size"
            name="size"
            onSelect={(option) => {
              console.log(`option = ${option}`);
              setItem({
                ...item,
                catagory: option,
              });
            }}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            size="small"
            name="quantity" // Updated "name" to "itemName"
            value={item.name} // Updated "name" to "itemName"
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
            value={item.size}
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
            value={item.price}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            size="small"
            name="quantity"
            type="number"
            value={item.quantity}
            onChange={handleChange}
          />
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
      {/* <CardContent sx={{ marginTop: 2 }}>
        <StockTable // Updated to use StockTable
          data={searchValue ? SearchStock() : data} // Updated to use SearchStock
          header={header}
          setItem={setItem} // Updated to use "item" instead of "customer"
        />
      </CardContent> */}
    </Card>
  );
}
