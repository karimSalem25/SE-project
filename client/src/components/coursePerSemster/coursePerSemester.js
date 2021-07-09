import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowCoursesPerSem() {
  const classes = useStyles();

  const [CoursesPerList, setCoursesPerList] = useState([]);
    
  useEffect(() => {
    axios.get("http://localhost:5000/course").then((allCourses) => {
      setCoursesPerList(allCourses.data);
    });
  }, []);

  return (
    <>
      <h2>Courses Per Major</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID Number</TableCell>
              <TableCell align="right">Course name</TableCell>
              <TableCell align="right">Credit Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CoursesPerList.map((course, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {course.CourseID}
                </TableCell>
                <TableCell align="right">{course.CourseName}</TableCell>
                <TableCell align="right">{course.CreditHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}