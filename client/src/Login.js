//import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudent/showstudent.js';
import Create from './components/createStudent/createStudent.js';
import useStyles from './styles'
import './App.css';

//import Login from './Components/Login';
//import { useHistory } from "react-router-dom";


  //const history = useHistory(); 

  
 /* axios.post('http://localhost:5000/esmroute', student).then( (data) =>{
if(data.type /data.json().type =="student")
{
  history.push("/studentport");
}else{
  history.push("/teachport");
}
        
      })*/
function Login() {
  const classes = useStyles();
  return (
    <div className="App">
     
Login Page!
        
<form action="/Schedule">
  <label>
    UserName:
    <input type="text" name="UserName" />
  </label>
  <br></br>
  <label>
    Password:
    <input type="text" name="Password" />
  </label>
  
  <button id="button"onClick="/Schedule">Login!</button>
</form>
     <br>
     </br>
     Not a User please signup! 
     <input type="button" value="SignUp" onClick="/SignUp" />
    </div>
  );
}

export default Login;
