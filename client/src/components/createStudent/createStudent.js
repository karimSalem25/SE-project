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

export default function CreateStudent() {
  const classes = useStyles();

  //Update the states 
  const [student, setStudent]= useState({
    Day: '',
    FirstP: '', 
    SecondP: '',
    ThirdP: '', 
    FourthP: '', 
    FifthP: '',
    tutorial: ''
      }); 

   const createStudent = () => {
       axios.post('http://localhost:5000/students', student).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Schedule</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="day" variant="outlined" value = {student.Day} onChange= {(event) => {
          setStudent({ ...student, Day :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="1st" variant="outlined" value = {student.FirstP} onChange= {(event) => {
          setStudent({ ...student, FirstP :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="2nd" variant="outlined" value = {student.SecondP} onChange= {(event) => {
          setStudent({ ...student, SecondP :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="3rd" variant="outlined" value = {student.ThirdP} onChange= {(event) => {
          setStudent({ ...student, ThirdP :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="4th" variant="outlined" value = {student.FourthP} onChange= {(event) => {
          setStudent({ ...student, FourthP :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="5th" variant="outlined" value = {student.FifthP} onChange= {(event) => {
          setStudent({ ...student, FifthP :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="tut" variant="outlined" value = {student.tutorial} onChange= {(event) => {
          setStudent({ ...student, tutorial :event.target.value}) 
          }}/>
      <Button variant="contained" color="primary" onClick ={createStudent}> 
        Create 
      </Button>
    </form>
    </>
  );
}