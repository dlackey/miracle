import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
 } from '@material-ui/core';
 import Timer from './Timer';

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
        <img src='miracle.png' className={classes.logo} alt='Logo' />
        <Saver
          title='Silence'
          text='As you sit in silence, you’re totally present in the moment. You calm your mind, relax your body, and allow all of your stress to melt away.'
        />
        <Saver
          title='Affirmations'
          text={affirmations}
        />
        <Saver
          title='Visualization'
          text='You visualize the day going perfectly, see yourself enjoying your work, smiling and laughing with your family, or your significant other, and easily accomplishing all that you intend to accomplish for that day.'
        >
          <CardMedia image="health.webp" component="img" height="100%" />
        </Saver>
        <Saver
          title='Reading'
          text='10 Pages, Picture'
        />
        <Saver
          title='Scribing'
          text='What’s the ONE Thing I can do today such that by doing it everything else will be easier or unnecessary?'
        />
        <Saver
          title='Exercise'
          text='Finally, you stand up and you spend the last minute, doing jumping jacks for 60 seconds and getting your heart rate up and getting energized and waking yourself up and increasing your ability to be alert and to focus.'
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
