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

export default function StockTable({ data, header, setItem }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // useEffect(() => {
  //   // Adjust the page when data length changes
  //   setPage((prevPage) =>
  //     Math.min(prevPage, Math.ceil(data.length / rowsPerPage))
  //   );
  // }, [data.length]);

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
      <Title>Stock Data</Title>
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
                    setItem({
                      id: row[0],
                      itemName: row[1], // Updated "name" to "itemName"
                      size: row[2],
                      catagory: row[3], // Updated "catagory" to "category"
                      price: row[4],
                      quantity: row[5],
                      action: "edit",
                    });
                  }}
                >
                  <EditSharpIcon />
                </IconButton>
                <IconButton
                  color="warning"
                  onClick={() => {
                    setItem({
                      id: row[0],
                      itemName: row[1], // Updated "name" to "itemName"
                      size: row[2],
                      catagory: row[3], // Updated "catagory" to "category"
                      price: row[4],
                      quantity: row[5],
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
