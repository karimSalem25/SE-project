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

export default function apply() {
  const classes = useStyles();

  const [student, setStudent] = useState({
      id: 0,
      studentName: '',
      grade: '',
      section: ''
  });

  const apply = () => {
    axios.post('http://localhost:5000/students',student).then(() => {
        window.location.reload(false);
    })
  }


  return (
      <>
      <h2>
          Create Student
      </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="User name" variant="outlined" value={student.username} onChange = {(event) => {
          setStudent({ ...student, username: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="ID" variant="outlined" value={student.id} onChange = {(event) => {
          setStudent({ ...student, id: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={student.email} onChange = {(event) => {
          setStudent({ ...student, email: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Major" variant="outlined" value={student.major} onChange = {(event) => {
          setStudent({ ...student, major: event.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick = {(apply)}>
        Create
      </Button>
    </form>
    </>
  );
}
