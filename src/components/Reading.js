import React from 'react';
import Saver from './Saver';

const text = (
  <React.Fragment>
    I read 10 pages of <i>How Not To Die</i>.
  </React.Fragment>
);

function Reading() {
  return (
    <Saver title='Reading' text={text} />
  );
}

export default Reading;
