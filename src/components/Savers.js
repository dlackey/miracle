import React from 'react';
import { Link } from '@material-ui/core';
import { Saver, SaverAction, SaverImage } from './Saver';
import visualization from '../images/pool.jpg';
import { calculatePage } from './utility';

const AFFIRMATIONS = ['recomposition', 'one date each week', 'house hacking'];
const VISUALIZATION = 'I visualize house hacking.';
const READING_TO_PAGE = 274;
const READING_FROM_PAGE = 0;
const READING_TITLE = 'Never Split the Difference';

const EXERCISE_VIDEOS = [
  ['https://youtu.be/bEv6CCg2BC8?t=147', 'Back Squat'],
  ['https://youtu.be/vcBig73ojpE?t=134', 'Barbell Bench Press'],
  ['https://youtu.be/_RlRDWO2jfg?t=121', 'Barbell Overhead Press'],
  ['https://youtu.be/VL5Ab0T07e4?t=175', 'Conventional Deadlift'],
  ['https://youtu.be/yN6Q1UI_xkE?t=75', 'Dip'],
  ['https://youtu.be/Hdc7Mw6BIEE?t=155', 'Pull-Up'],
  ['https://youtu.be/-MRNjTr6xrE?t=715', 'Push-Up'],
  ['https://youtu.be/2RrGnjxSsiA?t=124', 'Weighted Crunch'],
];

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
  const text = (
    <ul>
      {EXERCISE_VIDEOS.map(video => (
        <li>
          <Link href={video[0]} target="_blank">{video[1]}</Link>
        </li>
      ))}
    </ul>
  );

  return <Saver title="Exercise" text={text} />;
}

function Reading() {
  const page = calculatePage(READING_TO_PAGE, READING_FROM_PAGE);
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
