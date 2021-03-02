import React from 'react';
import { CardMedia } from '@material-ui/core';
import Saver from './Saver';
import image from '../images/visualization.png';

function Visualization() {
  return (
    <Saver
      title="Visualization"
      text="I visualize Falconhead getting leased."
    >
      <CardMedia image={image} component="img" />
    </Saver>
  );
}

export default Visualization;
