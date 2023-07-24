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

function preventDefault(event) {
  event.preventDefault();
}

export default function ResourceInfo() {
  const { tableData } = React.useContext(TableContext);
  console.log(`Table data = ${tableData.header},${tableData.data}`);
  const { header, data } = tableData;
  console.log(`Table data2 = ${header},${data}`);

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
            {/* <TableCell>Date</TableCell>
            <TableCell>PersonIn</TableCell>
            <TableCell>PersonOut</TableCell> */}
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
              <TableCell>{row[2]}</TableCell>
              <TableCell>{row[3]}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
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
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
