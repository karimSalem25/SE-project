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

export default function ShowCoursesPerSem() {
  const classes = useStyles();

  const [CoursesPerList, setCoursesPerList] = useState([]);

const deleteStudent = (id) => {
    axios.delete('http://localhost:5000/coursep/' + id).then(() => {
        window.location.reload(false); 
    })
}
    
  useEffect(() => {
    axios.get("http://localhost:5000/coursep").then((allCoursesPer) => {
      setCoursesPerList(allCoursesPer.data);
    });
  }, []);

  return (
    <>
      <h2>Courses Per Major</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">ID No.</TableCell>
              <TableCell align="right">Major</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CoursesPerList.map((coursep, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {coursep.studentName}
                </TableCell>
            
                <TableCell align="right">{coursep.id}</TableCell>
                <TableCell align="right">{coursep.major}</TableCell>
                <TableCell align="right">{coursep.course}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" className={classes.margin} onClick = {() => deleteStudent(coursep._id)}>
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
