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

export default function addCourse() {
  const classes = useStyles();

  const [course, setcourse] = useState({
      id: 0,
      credit_hrs: 0,
      course_name: '',
      section: ''
  });

  const addCourse = () => {
    axios.post('http://localhost:5000/course',course).then(() => {
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
          setcourse({ ...course, id: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={course.course_name} onChange = {(event) => {
          setcourse({ ...course, course_name: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={course.credit_hrs.grade} onChange = {(event) => {
          setcourse({ ...course, credit_hrs: event.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick = {(addCourse)}>
        Add
      </Button>
    </form>
    </>
  );
}
