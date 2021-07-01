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

export default function AddCourse() {
  const classes = useStyles();

  const [course, setCourse] = useState({
      id: 0,
      name: '',
      credit_hrs: 0,
  });

  const addCourse = () => {
    axios.post('http://localhost:5000/course').then(() => {
        window.location.reload(false);
    })
  }


  return (
      <>
      <h2>
          Add Course
      </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="ID" variant="outlined" value={course.id} onChange = {(event) => {
          setCourse({ ...course, id: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={course.name} onChange = {(event) => {
          setCourse({ ...course, name: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Credit Hours" variant="outlined" value={course.credit_hrs} onChange = {(event) => {
          setCourse({ ...course, credit_hrs: event.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick = {(addCourse)}>
        Add
      </Button>
    </form>
    </>
  );
    }