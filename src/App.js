import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './images/miracle.png';
import { Silence, Affirmations, Visualization, Exercise, Reading, Chinese, Scribing } from './components/Savers';
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

function isSunday() {
  return (new Date()).getDay() === 1;
}

function Sunday() {
  return (
    <React.Fragment>
      <Scribing />
      <Chinese text="I complete a lesson in Duolingo." />
    </React.Fragment>
  );
}

function Daily() {
  return (
    <React.Fragment>
      <Silence />
      <Affirmations />
      <Visualization />
      <Scribing />
      <Chinese text="I earn 50 XP in Duolingo." />
      <Reading />
      <Exercise />
    </React.Fragment>
  );
}

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Timer />
      <Container maxWidth="xs" className={classes.container}>
        <img src={logo} className={classes.logo} alt="Logo" />
        {isSunday() ? <Sunday /> : <Daily />}
      </Container>
    </React.Fragment>
  );
}

export default App;
