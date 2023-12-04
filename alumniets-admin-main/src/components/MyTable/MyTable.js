import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./MyTable.css"
const MyTable = () => {
  const data = [
    {
      studentId: 1,
      firstName: "Jatin",
      lastName: "Chaudhary",
      year: 3,
      branch: "Computer Science",
    },
    {
      studentId: 2,
      firstName: "Harsh",
      lastName: "Chaudhary",
      year: 3,
      branch: "Computer Science",
    },
    {
      studentId: 3,
      firstName: "Pratham",
      lastName: "Chaudhary",
      year: 3,
      branch: "Computer Science",
    },
    {
      studentId: 4,
      firstName: "Prashant",
      lastName: "Chaudhary",
      year: 3,
      branch: "Electrical",
    },
    {
      studentId: 5,
      firstName: "Lakshay",
      lastName: "Chaudhary",
      year: 3,
      branch: "Computer Science",
    },
    {
      studentId: 6,
      firstName: "Akshay",
      lastName: "Chaudhary",
      year: 3,
      branch: "Computer Science",
    },
    {
      studentId: 7,
      firstName: "Arun",
      lastName: "Chaudhary",
      year: 1,
      branch: "Computer Science",
    },
    {
      studentId: 8,
      firstName: "Somu",
      lastName: "Chaudhary",
      year: 2,
      branch: "Computer Science",
    },
    {
      studentId: 9,
      firstName: "Lolo",
      lastName: "Likku",
      year: 4,
      branch: "Muh me lene wali branch",
    },
  ];
  return (
    <div className="table-div">
      <TableContainer className="table-container" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Branch</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((val) => (
                <TableRow
                  key={val.studentId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {val.studentId}
                  </TableCell>
                  <TableCell align="right">{val.firstName}</TableCell>
                  <TableCell align="right">{val.lastName}</TableCell>
                  <TableCell align="right">{val.year}</TableCell>
                  <TableCell align="right">{val.branch}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default MyTable;
