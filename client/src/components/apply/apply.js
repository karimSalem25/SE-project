import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Apply() {
  const classes = useStyles();

  const [student, setStudent] = useState({
      id: '',
      studentName: '',
      grade: '',
      section: ''
  });

  const Apply = () => {
    axios.post('http://localhost:5000/students',student).then(() => {
        window.location.reload(false);
    })
  }


  return (
      <>
      <h2>
          apply
      </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="First Name" variant="outlined" value={student.firstName} onChange = {(event) => {
          setStudent({ ...student, firstName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Second Name" variant="outlined" value={student.secondName} onChange = {(event) => {
          setStudent({ ...student, secondName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" value={student.lastName} onChange = {(event) => {
          setStudent({ ...student, lastName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="ID" variant="outlined" value={student.id} onChange = {(event) => {
          setStudent({ ...student, id: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="User Name" variant="outlined" value={student.userName} onChange = {(event) => {
          setStudent({ ...student, userName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={student.section} onChange = {(event) => {
          setStudent({ ...student, section: event.target.value})
      }}/>
      
      <TextField id="outlined-basic" label="Major" variant="outlined" value={student.major} onChange = {(event) => {
          setStudent({ ...student, major: event.target.value})
      }}/>
      
      <Button variant="contained" color="primary" onClick = {(Apply)}>
        apply
      </Button>
    </form>
    </>
  );
}
