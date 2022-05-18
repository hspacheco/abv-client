import { styled } from "@stitches/react";
import { useMemo } from "react";
import { useTable } from "react-table";
import { Flex } from "../../components/flex";

export function TableResults() {
  const data = useMemo(
    () => [
      {
        col1: "asdasd",
        col2: "World",
        col3: "Teste",
      },
      {
        col1: "react-table",
        col2: "rocks",
        col3: "Teste",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "Teste",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Nome/Genoma",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Sintomas",
        accessor: "col2",
        Cell: (data: any) => (
          <Flex direction="column">
            <div style={{ lineHeight: "24px" }}>{data.cell.value}</div>
            <div style={{ lineHeight: "24px" }}>{data.cell.value}</div>
            <div style={{ lineHeight: "24px" }}>{data.cell.value}</div>
            <div style={{ lineHeight: "24px" }}>{data.cell.value}</div>
            <div style={{ lineHeight: "24px" }}>{data.cell.value}</div>
          </Flex>
        ),
      },
      {
        Header: "Nível de similaridade",
        accessor: "col3",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<object>({ columns, data });

  const TableHead = styled("th", {
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "left",
    borderBottom: "solid 1px WhiteSmoke",
    padding: 8,
  });

  const TableCell = styled("td", {
    fontSize: 14,
    textAlign: "left",
    padding: 8,
    verticalAlign: "top",
  });

  return (
    <table style={{ borderSpacing: 0, width: "100%" }} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHead {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableHead>
            ))}
          </tr>
        ))}
      </thead>
      <tbody style={{ fontSize: 14 }} {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
