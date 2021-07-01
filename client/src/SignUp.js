import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudent/showstudent.js';

import useStyles from './styles'
import './App.css';

function SignUp() {
    const classes = useStyles();
    return (
      <div className="App">
       
  SignUp Page!
          
  <form>
    <label>
      First Name:
      <input type="text" name="FirstName" />
    </label>
    <br></br>
    <label>
      Last Name:
      <input type="text" name="LastName" />
    </label>
    <br></br>
    <label>
      Email:
      <input type="text" name="Email" />
    </label>
    <br></br>
    <label>
     Username:
      <input type="text" name="UserName" />
    </label>
    <br></br>
    <label>
      Password:
      <input type="text" name="Password" />
    </label>
    <input type="submit" value="Sign Up" onClick="" />
  </form>
       <br>
       </br>
       Already a User please signin! 
       <input type="button" value="SignIn" onClick="/Login" />
      </div>
    );
  }
  
  export default SignUp;