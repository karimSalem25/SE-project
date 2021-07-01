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

  const [apply, setAppliedStudent] = useState({
    firstName: '',
    secondName: '',
    lastName: '',
    id: '',
    userName: '',
    section: '',
    major: ''
  });

  const Apply = () => {
    axios.post('http://localhost:5000/apply',apply).then(() => {
        window.location.reload(false);
    })
  }


  return (
      <>
      <h2>
          apply
      </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="First Name" variant="outlined" value={apply.firstName} onChange = {(event) => {
          setAppliedStudent({ ...apply, firstName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Second Name" variant="outlined" value={apply.secondName} onChange = {(event) => {
          setAppliedStudent({ ...apply, secondName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" value={apply.lastName} onChange = {(event) => {
          setAppliedStudent({ ...apply, lastName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="ID" variant="outlined" value={apply.id} onChange = {(event) => {
          setAppliedStudent({ ...apply, id: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="User Name" variant="outlined" value={apply.userName} onChange = {(event) => {
          setAppliedStudent({ ...apply, userName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={apply.section} onChange = {(event) => {
          setAppliedStudent({ ...apply, section: event.target.value})
      }}/>
      
      <TextField id="outlined-basic" label="Major" variant="outlined" value={apply.major} onChange = {(event) => {
          setAppliedStudent({ ...apply, major: event.target.value})
      }}/>
      
      <Button variant="contained" color="primary" onClick = {(Apply)}>
        apply
      </Button>
    </form>
    </>
  );
}
