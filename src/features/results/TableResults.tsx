import { styled } from "@stitches/react";
import { useMemo } from "react";
import { useTable } from "react-table";
import { Flex } from "../../components/flex";
import { IResult, MOCK_RESULTS } from "../../../mock-results";
import { Tag } from "../../components/tag";

const GridResult = styled("div", {
  display: "grid",
  gridTemplateColumns: "15ch 15ch",
  marginBottom: 4,
});

const TableDashed = styled("table", {
  borderSpacing: 0,
  width: "100%",
  borderCollapse: "collapse",
});

const TBody = styled("tbody", {
  fontSize: 14,
  "tr:nth-child(even)": {
    backgroundColor: "White",
    borderTop: "solid 1px #f1eded",
    borderBottom: "solid 1px #f1eded",
  },
});

function ResultTag({ score }: { score: number }) {
  return score;
  const type =
    score <= 0.3
      ? "danger"
      : score < 0.6 && score > 0.3
      ? "warning"
      : "secondary";
  const name =
    score <= 0.3 ? "baixa" : score < 0.6 && score > 0.3 ? "média" : "alta";
  return <Tag type={type}>{name}</Tag>;
}

export function TableResults() {
  const data = useMemo(
    () =>
      Object.entries(MOCK_RESULTS).map(([title, data]) => ({
        name: title,
        symptoms: data.symptoms,
        associatedGenome: data.associatedGenome,
      })),
    [MOCK_RESULTS]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Locus/Arquivo",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Sintomas",
        accessor: "symptoms",
        Cell: (data: any) =>
          data.cell.value.map((symp: any) => (
            <GridResult>
              <span style={{ lineHeight: "24px" }}>{symp.name}</span>
              <ResultTag score={symp.score} />
              {/* <span style={{ lineHeight: "24px" }}>{symp.score}</span> */}
            </GridResult>
          )),
      },
      {
        Header: "Nível de similaridade",
        accessor: "associatedGenome",
        Cell: (data: any) =>
          data.cell.value.map((associated: any) => (
            <GridResult>
              <span style={{ lineHeight: "24px" }}>{associated.name}</span>
              <ResultTag score={associated.score} />
            </GridResult>
          )),
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
    <TableDashed {...getTableProps()}>
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
      <TBody {...getTableBodyProps()}>
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
      </TBody>
    </TableDashed>
  );
}
