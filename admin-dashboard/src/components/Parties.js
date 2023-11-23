// import * as React from "react";
// import { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import CardContent from "@mui/material/CardContent";
// import Divider from "@mui/material/Divider";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import TableData from "./TableData";

// export default function Parties() {
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
//         <Typography variant="h6">Add New Party</Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             sx={{ marginRight: 5, marginTop: 2 }}
//             id="outlined-basic"
//             label="Name"
//             variant="outlined"
//             size="small"
//             name="name"
//           />
//           <TextField
//             sx={{ marginRight: 5, marginTop: 2 }}
//             id="outlined-basic"
//             label="Phone"
//             variant="outlined"
//             size="small"
//             name="phone"
//           />
//           <TextField
//             sx={{ marginRight: 5, marginTop: 2 }}
//             id="outlined-basic"
//             label="Address"
//             variant="outlined"
//             size="small"
//             name="address"
//           />
//           <TextField
//             sx={{ marginRight: 5, marginTop: 2 }}
//             id="outlined-basic"
//             label="Cnic"
//             variant="outlined"
//             size="small"
//             name="cnic"
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
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PartyTable from "./PartyTable.js";
import { useDispatch, useSelector } from "react-redux";
import {
  createPartyRecord,
  getAllPartyRecord,
  updatePartyRecord,
  deletePartyRecord,
} from "../features/Data/PartiesSlice.js";

export default function PartyForm() {
  const dispatch = useDispatch();
  const { header, data } = useSelector((state) => state.party);
  const [searchValue, setSearchValue] = useState("");
  const [party, setParty] = useState({
    name: "",
    phone: "",
    address: "",
    cnic: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!party.action) {
      dispatch(createPartyRecord(party));
      Clear();
    } else if (party.action === "edit") {
      dispatch(updatePartyRecord(party));
      dispatch(getAllPartyRecord());
      dispatch(getAllPartyRecord());
      Clear();
    } else {
      dispatch(deletePartyRecord(party.id));
      dispatch(getAllPartyRecord());
      dispatch(getAllPartyRecord());
      Clear();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearchValue(value);
    } else {
      setParty({ ...party, [name]: value });
    }
  };

  const SearchParty = () => {
    return data.filter((item) => {
      return item[1].toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  const Clear = () => {
    setParty({ name: "", phone: "", address: "", cnic: "" });
    setSearchValue("");
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
            value={party.name}
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
            value={party.phone}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            name="address"
            value={party.address}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5, marginTop: 2 }}
            id="outlined-basic"
            label="Cnic"
            variant="outlined"
            size="small"
            name="cnic"
            value={party.cnic}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginRight: 5, marginTop: 2 }}
          >
            Add
          </Button>
          {party.action === "edit" && (
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
          {party.action === "delete" && (
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
        <PartyTable
          data={searchValue ? SearchParty() : data}
          header={header}
          setParty={setParty}
        />
      </CardContent>
    </Card>
  );
}
