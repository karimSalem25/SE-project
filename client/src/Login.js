//import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudent/showstudent.js';
import Create from './components/createStudent/createStudent.js';
import useStyles from './styles'
import './App.css';
/*import { useHistory } from "react-router-dom";


  const history = useHistory(); twdeek pages

  
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
        
      
    </div>
  );
}

export default Login;
