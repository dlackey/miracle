import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  //CardMedia,
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

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth='xs' className={classes.container}>
        <img src='miracle.png' className={classes.logo} alt='Logo' />
        <Saver header='Silence'>
          As you sit in silence, you’re totally present in the moment. You calm your mind, relax your body, and allow all of your stress to melt away.
        </Saver>
        <Saver header='Affirmations'>
          <ul>
            <li>I will eat a whole, plant-based diet.</li>
            <li>I will have one date each week.</li>
            <li>I will complete this quarter's Rocks.</li>
          </ul>
        </Saver>
        <Saver header='Visualization'>
          You visualize the day going perfectly, see yourself enjoying your work, smiling and laughing with your family, or your significant other, and easily accomplishing all that you intend to accomplish for that day.
        </Saver>
        <Saver header='Reading'>
          10 Pages, Picture
        </Saver>
        <Saver header='Scribing'>
          What’s the ONE Thing I can do today such that by doing it everything else will be easier or unnecessary? Love, Health, Wealth.
        </Saver>
        <Saver header='Exercise'>
          Finally, you stand up and you spend the last minute, doing jumping jacks for 60 seconds and getting your heart rate up and getting energized and waking yourself up and increasing your ability to be alert and to focus.
        </Saver>
      </Container>
      <Timer />
    </React.Fragment>
  );
}

function Saver({ header, children }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">
          {header}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {children}
        </Typography>
      </CardContent>
      {/* <CardMedia image="book.png" component="img" height="100" /> */}
    </Card>
  );
}

export default App;
