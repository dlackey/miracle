import React from 'react';
import { Saver, SaverAction, SaverImage, SaverVideo } from './Saver';
import visualization from '../images/longhorn.jpg';
import { calculatePage } from './utility';

const AFFIRMATIONS = ['5/3/1', 'not criticizing Alison', 'house hacking'];
const VISUALIZATION = 'I visualize house hacking.';
const READING_TO_PAGE = 100;
const READING_FROM_PAGE = 50;
const READING_TITLE = 'The Multifamily Millionaire and Genghis Khan';

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
    <ul>
      {AFFIRMATIONS.map((x, i) => (
        <li key={i}>I commit to {x}.</li>
      ))}
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
      <SaverImage image={visualization} />
    </Saver>
  );
}

function Exercise() {
  return (
    <Saver
      title="Exercise"
      text="I strengthen my wrists."
    >
      <SaverVideo src="https://www.youtube.com/embed/rY1-NA9V6ko" />
    </Saver>
  );
}

function Reading() {
  const page = calculatePage(READING_TO_PAGE, READING_FROM_PAGE);
  const text = (
    <React.Fragment>
      I read to {page}% of <i>{READING_TITLE}</i>.
    </React.Fragment>
  );

  return (
    <Saver title="Reading" text={text} />
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
      text="What's the ONE Thing I can do today such that by doing it everything else will be easier or unnecessary?"
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
