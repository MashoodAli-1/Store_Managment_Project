// import * as React from "react";
// import { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import CardContent from "@mui/material/CardContent";
// import Divider from "@mui/material/Divider";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import TableData from "./TableData";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   createCategoryRecord,
//   getAllCategoryRecord,
//   updateCategoryRecord,
//   deleteCategoryRecord,
// } from "../features/Data/CategorySlice";

// //change
// export default function Catagory() {
//   const dispatch = useDispatch();
//   const { header, data } = useSelector((state) => state.category); // Updated to use the category slice state.
//   const [searchValue, setSearchValue] = useState("");
//   const [category, setCategory] = useState({ // Renamed from customer to category.
//     name: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!category.action) {
//       dispatch(createCategoryRecord(category)); // Updated to use the createCategoryRecord function.
//       Clear();
//     } else if (category.action === "edit") {
//       dispatch(updateCategoryRecord(category)); // Updated to use the updateCategoryRecord function.
//       dispatch(getAllCategoryRecord()); // Updated to use the getAllCategoryRecord function.
//       dispatch(getAllCategoryRecord());
//       Clear();
//     } else {
//       dispatch(deleteCategoryRecord(category._id)); // Updated to use the deleteCategoryRecord function.
//       dispatch(getAllCategoryRecord()); // Updated to use the getAllCategoryRecord function.
//       dispatch(getAllCategoryRecord());
//       Clear();
//     }
//   };
//   return (
//     <Card sx={{ minWidth: 275, marginTop: 4 }}>
//       <CardContent>
//         <Typography variant="h6">Add New Catagory</Typography>
//         <form>
//           <TextField
//             sx={{ marginRight: 5, marginTop: 2 }}
//             id="outlined-basic"
//             label="Catagory Name"
//             variant="outlined"
//             size="small"
//             name="catagory"
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ marginRight: 5, marginTop: 2 }}
//           >
//             Add
//           </Button>
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
import { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CategoryTable from "./CatagoryTable";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategoryRecord,
  getAllCategoryRecord,
  updateCategoryRecord,
  deleteCategoryRecord,
} from "../features/Data/CatagorySlice";

export default function Catagory() {
  const dispatch = useDispatch();
  const { header, data } = useSelector((state) => state.category);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category.action) {
      dispatch(createCategoryRecord(category));
      Clear();
    } else if (category.action === "edit") {
      console.log(category);
      dispatch(updateCategoryRecord(category));
      dispatch(getAllCategoryRecord());
      dispatch(getAllCategoryRecord());
      Clear();
    } else {
      console.log(category);
      dispatch(deleteCategoryRecord(category._id));
      dispatch(getAllCategoryRecord());
      dispatch(getAllCategoryRecord());
      Clear();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearchValue(value);
    } else {
      setCategory({ ...category, [name]: value });
    }
  };

  const SearchCategory = () => {
    return data.filter((item) => {
      return item[1].toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  const Clear = () => {
    setCategory({ name: "" });
    setSearchValue("");
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 4 }}>
      <CardContent>
        <Typography variant="h6">Add New Category</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Category Name"
            variant="outlined"
            size="small"
            name="name"
            value={category.name}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginRight: 5, marginTop: 2 }}
          >
            Add
          </Button>
          {category.action === "edit" && (
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
          {category.action === "delete" && (
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
        <CategoryTable
          data={searchValue ? SearchCategory() : data}
          header={header}
          setCategory={setCategory}
        />
      </CardContent>
    </Card>
  );
}
