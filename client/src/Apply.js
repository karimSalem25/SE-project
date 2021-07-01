//import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudent/showstudent.js';
import Create from './components/apply/apply.js';
import useStyles from './styles'
import './Apply.css';

function Apply() {
  const classes = useStyles();
  return (
    <div className="Apply">
      <Container maxWidth = "g"> 
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant = "h2" align = "center">
            Apply
            </Typography>
         </AppBar>
        <Grow in>
          <Container>
            <Grid container justify = "space-between" alignItems = "stretch">
              <Grid item xs = {12} sm = {7}>
                  <appBar className = {classes.appBar} position="static" color="inherit">
                    <Student />
                  </appBar>
              </Grid>
            </Grid>
              <Grid item xs = {12} sm = {4}>
              <appBar className = {classes.appBar} position="static" color="inherit">
                    <Create /> 
                  </appBar>
              </Grid>
          </Container>

        </Grow>
      </Container>
    </div>
  );
}

export default Apply;