import React from 'react';
import Saver from './Saver';

const text = (
  <React.Fragment>
    I commit to a whole, plant-based diet.<br />
    I commit to one date each week.<br />
    I commit to this quarter's Rocks.
  </React.Fragment>
);

function Affirmations() {
  return (
    <Saver title="Affirmations" text={text} />
  );
}

export default Affirmations;
