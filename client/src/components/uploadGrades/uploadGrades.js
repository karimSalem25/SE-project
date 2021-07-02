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

export default function UploadGrades() {
  const classes = useStyles();

  const [grade, setGrade] = useState({
      id: '',
      studentName: '',
      elementName:'',
      grade: '',
      course:'',
      major: '', 
      TAIname:''
  });

  const UploadGrades = () => {
    axios.post('http://localhost:5000/grades',grade).then(() => {
        window.location.reload(false);
    })
  }


  return (
      <>
      <h2>
          Upload student grade
      </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="ID" variant="outlined" value={grade.id} onChange = {(event) => {
          setGrade({ ...grade, id: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Student Name" variant="outlined" value={grade.studentName} onChange = {(event) => {
          setGrade({ ...grade, studentName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Element Name" variant="outlined" value={grade.elementName} onChange = {(event) => {
          setGrade({ ...grade, elementName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={grade.grade} onChange = {(event) => {
          setGrade({ ...grade, grade: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Course" variant="outlined" value={grade.course} onChange = {(event) => {
          setGrade({ ...grade, course: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Major" variant="outlined" value={grade.major} onChange = {(event) => {
          setGrade({ ...grade, major: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="TA/Instructor Name" variant="outlined" value={grade.TAIname} onChange = {(event) => {
          setGrade({ ...grade, TAIname: event.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick = {(UploadGrades)}>
        Upload
      </Button>

      <a href="TAviewS">Go To Students </a>
     
    </form>
    </>
  );
}