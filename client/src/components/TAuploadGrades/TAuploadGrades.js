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

export default function CreateStudent() {
  const classes = useStyles();

  const [student, setStudent] = useState({
      id: '',
      studentName: '',
      grade: '',
      section: ''
  });

  const CreateStudent = () => {
    axios.post('http://localhost:5000/students',student).then(() => {
        window.location.reload(false);
    })
  }


  return (
      <>
      <h2>
          Upload student grade
      </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="ID" variant="outlined" value={student.id} onChange = {(event) => {
          setStudent({ ...student, id: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange = {(event) => {
          setStudent({ ...student, studentName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange = {(event) => {
          setStudent({ ...student, grade: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Course" variant="outlined" value={student.section} onChange = {(event) => {
          setStudent({ ...student, section: event.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick = {(CreateStudent)}>
        Upload
      </Button>
    </form>
    </>
  );
}
