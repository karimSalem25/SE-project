import React, {useState} from 'react';
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

export default function CreateCourse() {
  const classes = useStyles();

  //Update the states 
  const [course, setCourse]= useState({
    CourseID: '', 
    CourseName: '',
    CreditHours: ''
  });

   const CreateCourse = () => {
       axios.post('http://localhost:5000/course', course).then( () =>{
           window.location.reload(false);
       })

   }
   const updateCourse = () => {
    axios.post('http://localhost:5000/course/update', course).then( () =>{
        window.location.reload(false);
    })

}


  return (
      <>
      <h2> Create Course </h2>
    <form className={classes.root} noValidate autoComplete="off">


          <TextField id="outlined-basic" label="Course ID" variant="outlined" value = {course.CourseID} onChange= {(event) => {
          setCourse({ ...course, CourseID :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Course Name" variant="outlined" value = {course.CourseName} onChange= {(event) => {
          setCourse({ ...course, CourseName :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Credit Hours" variant="outlined" value = {course.CreditHours} onChange= {(event) => {
          setCourse({ ...course, CreditHours :event.target.value}) 
          }}/>
      <Button variant="contained" color="primary" onClick ={CreateCourse}> 
        Create 
      </Button>
      <Button variant="contained" color="primary" onClick ={updateCourse}> 
        Update 
      </Button>
      <a href="/Schedule">GO to Create Schedule </a>
    </form>
    </>
  );
}