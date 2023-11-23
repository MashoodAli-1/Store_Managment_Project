// import * as React from "react";
// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Title from "./Title";
// import dayjs from "dayjs";
// import { TableContext } from "../App";
// import { useDispatch } from "react-redux";
// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function ResourceInfo({ data, header }) {
//   console.log(`table data = ${data}`);
//   const dispatch = useDispatch();
//   // const formateDate = (date) => {
//   //   return dayjs(date).format("DD-MMM, YYYY H:M:S");
//   // };

//   return (
//     <React.Fragment>
//       <Title>Resource Data</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             {header.map((element, index) => (
//               <TableCell key={index}>{element}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {data.map((row, index) => (
//             <TableRow key={index}>
//               {row.map((cell, cellIndex) => (
//                 <TableCell key={cellIndex}>{cell}</TableCell>

//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </React.Fragment>
//   );
// }

// import * as React from "react";
// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Title from "./Title";
// import dayjs from "dayjs";
// import { TableContext } from "../App";
// import { useDispatch } from "react-redux";
// import IconButton from "@mui/material/IconButton"; // Import IconButton
// import EditSharpIcon from "@mui/icons-material/EditSharp"; // Import Edit icon
// import DeleteSharpIcon from "@mui/icons-material/DeleteSharp"; // Import Delete icon
// import { deleteCompanyRecord } from "../features/Data/CompanySlice";

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function ResourceInfo({ data, header, setCompany }) {
//   console.log(`table data = ${data}`);

//   // const formateDate = (date) => {
//   //   return dayjs(date).format("DD-MMM, YYYY H:M:S");
//   // };

//   return (
//     <React.Fragment>
//       <Title>Resource Data</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             {header.map((element, index) => (
//               <TableCell key={index}>{element}</TableCell>
//             ))}
//             <TableCell align="center">Actions</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {data.map((row, index) => (
//             <TableRow key={index}>
//               {row.map((cell, cellIndex) => (
//                 <TableCell key={cellIndex}>{cell}</TableCell>
//               ))}
//               <TableCell align="center">
//                 <IconButton
//                   color="primary"
//                   onClick={() => {
//                     setCompany({
//                       id: row[0],
//                       name: row[1],
//                       phone: row[2],
//                       address: row[3],
//                       action: "edit",
//                     });
//                   }}
//                 >
//                   <EditSharpIcon />
//                 </IconButton>
//                 <IconButton
//                   color="warning"
//                   onClick={() => {
//                     setCompany({
//                       id: row[0],
//                       name: row[1],
//                       phone: row[2],
//                       address: row[3],
//                       action: "delete",
//                     });
//                   }}
//                 >
//                   <DeleteSharpIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </React.Fragment>
//   );
// }

// import React, { useState, useEffect } from "react";
// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Title from "./Title";
// import IconButton from "@mui/material/IconButton";
// import EditSharpIcon from "@mui/icons-material/EditSharp";
// import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

// export default function ResourceInfo({ data, header, setCompany }) {
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 5;

//   useEffect(() => {
//     // Adjust the page when data length changes
//     setPage((prevPage) =>
//       Math.min(prevPage, Math.ceil(data.length / rowsPerPage))
//     );
//   }, [data.length]);

//   const handleNextPage = () => {
//     setPage((prevPage) =>
//       Math.min(prevPage + 1, Math.ceil(data.length / rowsPerPage))
//     );
//   };

//   const handlePrevPage = () => {
//     setPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const startIdx = (page - 1) * rowsPerPage;
//   const endIdx = startIdx + rowsPerPage;

//   return (
//     <React.Fragment>
//       <Title>Resource Data</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             {header.map((element, index) => (
//               <TableCell key={index}>{element}</TableCell>
//             ))}
//             <TableCell align="center">Actions</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {data.slice(startIdx, endIdx).map((row, rowIndex) => (
//             <TableRow key={rowIndex}>
//               {row.map((cell, cellIndex) => (
//                 <TableCell key={cellIndex}>{cell}</TableCell>
//               ))}
//               <TableCell align="center">
//                 <IconButton
//                   color="primary"
//                   onClick={() => {
//                     setCompany({
//                       id: row[0],
//                       name: row[1],
//                       phone: row[2],
//                       address: row[3],
//                       action: "edit",
//                     });
//                   }}
//                 >
//                   <EditSharpIcon />
//                 </IconButton>
//                 <IconButton
//                   color="warning"
//                   onClick={() => {
//                     setCompany({
//                       id: row[0],
//                       name: row[1],
//                       phone: row[2],
//                       address: row[3],
//                       action: "delete",
//                     });
//                   }}
//                 >
//                   <DeleteSharpIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <div>
//         <button disabled={page === 1} onClick={() => handlePrevPage}>
//           Prev
//         </button>
//         <button disabled={endIdx >= data.length} onClick={() => handleNextPage}>
//           Next
//         </button>
//       </div>
//     </React.Fragment>
//   );
// }

import React, { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import IconButton from "@mui/material/IconButton";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

export default function ResourceInfo({ data, header, setCompany }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleNextPage = () => {
    setPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.length / rowsPerPage))
    );
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIdx = (page - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;

  return (
    <React.Fragment>
      <Title>Resource Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {header.map((element, index) => (
              <TableCell key={index}>{element}</TableCell>
            ))}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.slice(startIdx, endIdx).map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
              <TableCell align="center">
                <IconButton
                  color="primary"
                  onClick={() => {
                    setCompany({
                      id: row[0],
                      name: row[1],
                      phone: row[2],
                      address: row[3],
                      action: "edit",
                    });
                  }}
                >
                  <EditSharpIcon />
                </IconButton>
                <IconButton
                  color="warning"
                  onClick={() => {
                    setCompany({
                      id: row[0],
                      name: row[1],
                      phone: row[2],
                      address: row[3],
                      action: "delete",
                    });
                  }}
                >
                  <DeleteSharpIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <button disabled={page === 1} onClick={handlePrevPage}>
          Prev
        </button>
        <button disabled={endIdx >= data.length} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </React.Fragment>
  );
}
