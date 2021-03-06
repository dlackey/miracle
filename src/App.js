import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './images/miracle.png';
import { Silence, Affirmations, Visualization, Exercise, Reading, Scribing } from './components/Savers';
import Timer from './components/Timer';

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
        <Silence />
        <Affirmations />
        <Visualization />
        <Scribing />
        <Reading />
        <Exercise />
      </Container>
    </React.Fragment>
  );
}

export default App;
