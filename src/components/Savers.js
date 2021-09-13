import React from 'react';
import { CardMedia } from '@material-ui/core';
import { Saver, SaverAction } from './Saver';
import visualization from '../images/longhorn.jpg';

const AFFIRMATIONS = ['5/3/1', 'one date each week', 'house hacking'];
const VISUALIZATION = 'I visualize house hacking with Unit A.';
const READING_PAGES = 10;
const READING_TITLE = 'Cashflow Quadrant';

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
      {AFFIRMATIONS.map(x => <li>I commit to {x}.</li>)}
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
      text={VISUALIZATION}
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
  const page = READING_PAGES * (new Date()).getDate() + 1;
  const text = (
    <React.Fragment>
      I read to page {page} of <i>{READING_TITLE}</i>.
    </React.Fragment>
  );

  return (
    <Saver title="Reading" text={text}>
      <SaverAction text="Open Book" href="https://apps.apple.com/us/app/id302584613" />
    </Saver>
  );
}

function Chinese({ text }) {
  return (
    <Saver title="Chinese" text={text}>
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
