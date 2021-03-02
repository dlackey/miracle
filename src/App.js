import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
 } from '@material-ui/core';
 import Timer from './components/Timer';
 import img1 from './images/miracle.png';
 import img2 from './images/visualization.png';
 
const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(2),
  },
  container: {
    paddingBottom: theme.spacing(2),
  },
  logo: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  text: {
    width: '100%',
  }
}));

const affirmations = (
  <React.Fragment>
    I commit to a whole, plant-based diet.<br />
    I commit to one date each week.<br />
    I commit to this quarter's Rocks.
  </React.Fragment>
);

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Timer />
      <Container maxWidth='xs' className={classes.container}>
        <img src={img1} className={classes.logo} alt='Logo' />
        <Saver
          title='Silence'
          text="As I sit in silence, I'm present in the moment. I calm my mind, relax my body, and allow all of my stress to melt away."
        />
        <Saver
          title='Affirmations'
          text={affirmations}
        />
        <Saver
          title='Visualization'
          text='I visualize Falconhead getting leased.'
        >
          <CardMedia image={img2} component="img" />
        </Saver>
        <Saver
          title='Reading'
          text='I read 10 pages of How Not To Die.' // Italics
        >
          {/*<CardMedia image="book.png" component="img" />*/}
        </Saver>
        <Saver
          title='Scribing'
          text='What’s the ONE Thing I can do today such that by doing it everything else will be easier or unnecessary?'
        >
          <CardContent>
            <TextField className={classes.text}
              multiline
            />
          </CardContent>
        </Saver>
        <Saver
          title='Exercise'
          text='I do jumping jacks for 60 seconds.'
        />
      </Container>
    </React.Fragment>
  );
}

function Saver({ title, text, children }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">
          {title}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {text}
        </Typography>
      </CardContent>
      {children}
    </Card>
  );
}

export default App;
