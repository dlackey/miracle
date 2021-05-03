import React from 'react';
import { CardMedia } from '@material-ui/core';
import { Saver, SaverAction } from './Saver';
import visualization from '../images/city.png';

function Silence() {
  return (
    <Saver
      title="Silence"
      text="As I sit in silence, I'm present in the moment. I calm my mind, relax my body, and allow all of my stress to melt away."
    >
      <SaverAction text="Open Calm" href="https://calmcom.app.link/" />
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
      text="I visualize buying a NNN."
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
      I read 10 pages of <i>The Simple Path to Wealth</i>.
    </React.Fragment>
  );

  return (
    <Saver title="Reading" text={text}>
      <SaverAction text="Open Book" href="https://apps.apple.com/us/app/id302584613" />
    </Saver>
  );
}

function Chinese() {
  return (
    <Saver
      title="Chinese"
      text="I do a Duolingo Chinese lesson."
    >
      <SaverAction text="Open Duolingo" href="https://www.duolingo.com/" />
    </Saver>
  );
}

function Scribing() {
  return (
    <Saver
      title="Scribing"
      text="What’s the ONE Thing I can do today such that by doing it everything else will be easier or unnecessary?"
    >
      <SaverAction text="Open Journal" href="https://forms.gle/MSg1Jvvq4PdkbkXM9" />
    </Saver>
  );
}

export {
  Silence,
  Affirmations,
  Visualization,
  Exercise,
  Reading,
  Chinese,
  Scribing,
};
