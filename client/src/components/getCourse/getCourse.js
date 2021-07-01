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
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function getCourse() {
  const classes = useStyles();

  const [coursesList, setcoursesList] = useState([]);

const deleteCourse = (id) => {
    axios.delete('http://localhost:5000/courses/' + id).then(() => {
        window.location.reload(false); 
    })
}
    
  useEffect(() => {
    axios.get("http://localhost:5000/courses").then((allCourses) => {
      setcoursesList(allCourses.data);
    });
  }, []);

  return (
    <>
      <h2>All Courses</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">ID No.</TableCell>
              <TableCell align="right">Credit Hours</TableCell>
              <TableCell align="right">Section</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coursesList.map((course, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {course.name}
                </TableCell>
            
                <TableCell align="right">{course.id}</TableCell>
                <TableCell align="right">{course.credit_hrs}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" className={classes.margin} onClick = {() => deleteCourse(course._id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}