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

export default function ShowStudent() {
  const classes = useStyles();

  const [studentsList, setStudentList] = useState([]);

const deleteStudent = (id) => {
    axios.delete('http://localhost:5000/students/' + id).then(() => {
        window.location.reload(false); 
    })
}
    
  useEffect(() => {
    axios.get("http://localhost:5000/students").then((allStudents) => {
      setStudentList(allStudents.data);
    });
  }, []);

  return (
    <>
      <h2>All students</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">ID No.</TableCell>
              <TableCell align="right">Grade</TableCell>
              <TableCell align="right">Section</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsList.map((student, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {student.studentName}
                </TableCell>
            
                <TableCell align="right">{student.id}</TableCell>
                <TableCell align="right">{student.grade}</TableCell>
                <TableCell align="right">{student.section}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" className={classes.margin} onClick = {() => deleteStudent(student._id)}>
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
