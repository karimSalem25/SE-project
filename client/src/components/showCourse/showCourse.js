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


export default function ShowCourse() {
  const classes = useStyles();

  const [courseList, setCourseList] = useState([])

  const deleteCourse= (id) => {
    axios.delete(`http://localhost:5000/course/`+id).then( () =>{
      window.location.reload(false); 
    })
  }
  const updateCourse= (id) => {
    axios.post(`http://localhost:5000/course/update`).then( () =>{
      window.location.reload(false); 
    })
  }
  useEffect(() =>{
    axios.get('http://localhost:5000/course').then( (allCourses) => {
      setCourseList(allCourses.data); 
      console.log(allCourses.data);
    })
  }, [])

  return (
      <>
      <h2>Courses</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            

            <TableCell>Course ID</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Credit Hours</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseList.map((course,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                    {course.CourseID}
              </TableCell>
              
              <TableCell align="right">{course.CourseName}</TableCell>
              <TableCell align="right">{course.CreditHours}</TableCell>
              <TableCell align="right">
                
           <IconButton aria-label="delete" className={classes.margin} onClick ={() => deleteCourse(course._id)}> 
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