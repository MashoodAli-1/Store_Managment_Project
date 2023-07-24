import React from "react";
import Admin from "./Pages/Admin";

export const TableContext = React.createContext(); // Create a context object

export default function Dashboard() {
  const [tableData, setTableData] = React.useState({
    header: ["id", "name"],
    data: ["someThing"],
  });

  return (
    <>
      {/* Provide the context value to the child components */}
      <TableContext.Provider value={{ tableData, setTableData }}>
        <Admin />
      </TableContext.Provider>
    </>
  );
}
