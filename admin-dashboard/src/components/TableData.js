import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import dayjs from "dayjs";
import { TableContext } from "../App";
import { useSelector } from "react-redux";
function preventDefault(event) {
  event.preventDefault();
}

export default function ResourceInfo() {
  const { header, data } = useSelector((state) => state.data);

  // const formateDate = (date) => {
  //   return dayjs(date).format("DD-MMM, YYYY H:M:S");
  // };

  return (
    <React.Fragment>
      <Title>Resource Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {header.map((element, index) => (
              <TableCell key={index}>{element}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
