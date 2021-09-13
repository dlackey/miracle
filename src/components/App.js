import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import logo from '../images/miracle.png';
import Morning from './Morning';
import Timer from './Timer';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  logo: {
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Timer />
      <Container maxWidth="xs" className={classes.container}>
        <img src={logo} className={classes.logo} alt="Logo" />
        <Morning />
      </Container>
    </React.Fragment>
  );
}

export default App;
