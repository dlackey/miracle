import React from 'react';
import { CardContent, CardMedia, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Saver from './Saver';
import visualization from '../images/visualization.png';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
  }
}));

function Silence() {
  return (
    <Saver
      title="Silence"
      text="As I sit in silence, I'm present in the moment. I calm my mind, relax my body, and allow all of my stress to melt away."
    />
  );
}

function Affirmations() {
  const text = (
    <React.Fragment>
      I commit to a whole, plant-based diet.<br />
      I commit to one date each week.<br />
      I commit to this quarter's Rocks.
    </React.Fragment>
  );

  return (
    <Saver title="Affirmations" text={text} />
  );
}

function Visualization() {
  return (
    <Saver
      title="Visualization"
      text="I visualize Falconhead getting leased."
    >
      <CardMedia image={visualization} component="img" />
    </Saver>
  );
}

function Exercise() {
  return (
    <Saver
      title="Exercise"
      text="I do jumping jacks for 60 seconds."
    />
  );
}

function Reading() {
  const text = (
    <React.Fragment>
      I read 10 pages of <i>How Not To Die</i>.
    </React.Fragment>
  );

  return (
    <Saver title="Reading" text={text} />
  );
}

function Scribing() {
  const classes = useStyles();

  return (
    <Saver
      title="Scribing"
      text="What’s the ONE Thing I can do today such that by doing it everything else will be easier or unnecessary?"
    >
      <CardContent>
        <TextField className={classes.textField} multiline />
      </CardContent>
    </Saver>
  );
}

export {
  Silence,
  Affirmations,
  Visualization,
  Exercise,
  Reading,
  Scribing,
};
