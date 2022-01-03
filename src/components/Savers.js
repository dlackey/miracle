import React from 'react';
import { Saver, SaverAction, SaverImage, SaverVideo } from './Saver';
import visualization from '../images/longhorn.jpg';
import { calculatePage } from './helpers';

const AFFIRMATIONS = ['5/3/1', 'one date each week', 'becoming a Superhost'];
const VISUALIZATION = 'I visualize becoming a Superhost.';
const READING_PAGES = 307;
const READING_TITLE = 'Atomic Habits';

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
      <SaverAction text="Open YouTube" href="https://www.youtube.com/embed/rY1-NA9V6ko" />
    </Saver>
  );
}

function Reading() {
  const page = calculatePage(READING_PAGES);
  const text = (
    <React.Fragment>
      I read to page {page} of <i>{READING_TITLE}</i>.
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
