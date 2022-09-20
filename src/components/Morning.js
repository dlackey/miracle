import React from 'react';
import {
  Silence,
  Affirmations,
  Visualization,
  Exercise,
  Reading,
  Scribing,
  Chinese,
} from './Savers';

function isSunday() {
  return (new Date()).getDay() === 0;
}

function Sunday() {
  return (
    <React.Fragment>
      <Chinese text="I complete a lesson in Duolingo." />
    </React.Fragment>
  );
}

function Everyday() {
  return (
    <React.Fragment>
      <Silence />
      <Affirmations />
      <Visualization />
      <Scribing />
      <Chinese text="I complete a quest in Duolingo." />
      <Reading />
      <Exercise />
    </React.Fragment>
  );
}

function Morning() {
  return isSunday() ? <Sunday /> : <Everyday />;
}

export default Morning;
