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


export default function TAShowStudent() {
  const classes = useStyles();

  const [TAstudentsList, TAsetStudentList] = useState([])

  const deleteStudent= (id) => {
    axios.delete(`http://localhost:5000/apply/${id}`).then( () =>{
      window.location.reload(false); 
    })
  }
  useEffect(() =>{
    axios.get('http://localhost:5000/apply').then( (allApplied) => {
      TAsetStudentList(allApplied.data); 
      console.log(allApplied.data); 
    })
  }, [])

  return (
      <>
      <h2>Students</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Second Name</TableCell>
            <TableCell align="right">Last Name </TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Major</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TAstudentsList.map((apply,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {apply.firstName}
              </TableCell>
              <TableCell align="right">{apply.secondName}</TableCell>
              <TableCell align="right">{apply.lastName}</TableCell>
              <TableCell align="right">{apply.id}</TableCell>
              <TableCell align="right">{apply.userName}</TableCell>
              <TableCell align="right">{apply.section}</TableCell>
              <TableCell align="right">{apply.major}</TableCell>
              <TableCell align="right">
           <IconButton aria-label="delete" className={classes.margin} onClick ={() => deleteStudent(apply._id)}> 
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