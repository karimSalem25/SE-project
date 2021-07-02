//import { deleteGrade } from "../../../../server/controllers/grade";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton'; 
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  export default function ShowStudent() {
    const classes = useStyles();
  
    const [GradesList, setGradesList] = useState([]);// alak trueeee  esm f3ln!
  
  const deleteGrade = (id) => {
      axios.delete('http://localhost:5000/grades/' + id).then(() => {
          window.location.reload(false); 
      })
  }
      
    useEffect(() => {
      axios.get("http://localhost:5000/grades").then((allGrades) => {
        setGradesList(allGrades.data);
      });
    }, []);
  
    return (
      <>
        <h2>Grades of all students</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">ID Number</TableCell>
                <TableCell align="right">Element Name</TableCell>
                <TableCell align="right">Grade</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Major</TableCell>
                <TableCell align="right">TA/Instructor Name</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {GradesList.map((grade, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {grade.studentName}
                  </TableCell>
              
                  <TableCell align="right">{grade.id}</TableCell>
                  <TableCell align="right">{grade.elementName}</TableCell>
                  <TableCell align="right">{grade.grade}</TableCell>
                  <TableCell align="right">{grade.course}</TableCell>
                  <TableCell align="right">{grade.major}</TableCell>
                  <TableCell align="right">{grade.TAIname}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}