import React from 'react';
import { Button, CardActions, CardMedia } from '@material-ui/core';
import Saver from './Saver';
import visualization from '../images/visualization.png';

function Silence() {
  return (
    <Saver
      title="Silence"
      text="As I sit in silence, I'm present in the moment. I calm my mind, relax my body, and allow all of my stress to melt away."
    >
      <CardActions>
        <Button color="primary" href="https://apps.apple.com/us/app/calm/id571800810" target="_blank">Open Calm</Button>
      </CardActions>
    </Saver>
  );
}

function Affirmations() {
  const text = (
    <ul>
      <li>I commit to improving my sleep.</li>
      <li>I commit to one date each week.</li>
      <li>I commit to house hacking.</li>
      <li>I commit to this quarter's Rocks.</li>
    </ul>
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
      I read 10 pages of <i>Leadership and Self-Deception</i>.
    </React.Fragment>
  );

  return (
    <Saver title="Reading" text={text} />
  );
}

function Scribing() {
  return (
    <Saver
      title="Scribing"
      text="What’s the ONE Thing I can do today such that by doing it everything else will be easier or unnecessary?"
    >
      <CardActions>
        <Button color="primary" href="https://forms.gle/MSg1Jvvq4PdkbkXM9" target="_blank">Open Journal</Button>
      </CardActions>
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
