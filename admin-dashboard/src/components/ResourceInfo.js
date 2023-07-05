import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import dayjs from "dayjs";
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function ResourceInfo({ resourceData }) {
  // React.useEffect(() => {
  //   fetchResource();
  // }, []);

  const formateDate = (date) => {
    return dayjs(date).format("DD-MMM, YYYY H:M:S");
  };

  return (
    <React.Fragment>
      <Title>Resource Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>PersonIn</TableCell>
            <TableCell>PersonOut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resourceData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{formateDate(row.date)}</TableCell>
              <TableCell>{row.PersonIn}</TableCell>
              <TableCell>{row.PersonOut}</TableCell>
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
