import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Timer from './components/Timer';
import image from './images/miracle.png';
import Saver from './components/Saver';
import Affirmations from './components/Affirmations';
import Visualization from './components/Visualization';
import Reading from './components/Reading';
import Scribing from './components/Scribing';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  logo: {
    width: '100%',
  },
}));

function Silence() {
  return (
    <Saver
      title='Silence'
      text="As I sit in silence, I'm present in the moment. I calm my mind, relax my body, and allow all of my stress to melt away."
    />
  );
}

function Exercise() {
  return (
    <Saver
      title='Exercise'
      text='I do jumping jacks for 60 seconds.'
    />
  );
}

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Timer />
      <Container maxWidth='xs' className={classes.container}>
        <img src={image} className={classes.logo} alt='Logo' />
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
