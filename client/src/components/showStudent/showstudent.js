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
      <h2>Grades of all students</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">ID Number</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Second Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Major</TableCell>
              
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsList.map((student, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {student.userName}
                </TableCell>
            
                <TableCell align="right">{student.id}</TableCell>
                <TableCell align="right">{student.firstName}</TableCell>
                <TableCell align="right">{student.secondName}</TableCell>
                <TableCell align="right">{student.lastName}</TableCell>
                <TableCell align="right">{student.section}</TableCell>
                <TableCell align="right">{student.major}</TableCell>
                
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
