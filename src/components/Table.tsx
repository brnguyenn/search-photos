import { ReactNode } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled, Table } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

interface TableProps {
  headers: string[];
  rows?: { rowId: number; rowItems: ReactNode[] }[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: lightGreen["500"],
    color: theme.palette.common.white,
    fontSize: 14,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 8,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
      padding: 16,
    },
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: lightGreen["100"],
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTable = ({ headers, rows }: TableProps): JSX.Element => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              {headers.map((header) => (
                <StyledTableCell key={`header-${header}`}>
                  {header}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow
                key={`row-id-${row.rowId}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.rowItems.map((item, idx) => (
                  <StyledTableCell
                    key={`${row.rowId}-${idx}`}
                    component="th"
                    scope="row"
                  >
                    {item}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StyledTable;
