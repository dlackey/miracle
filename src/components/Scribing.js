import React from 'react';
import { CardContent, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Saver from './Saver';

const useStyles = makeStyles(theme => ({
  input: {
    width: '100%',
  }
}));

function Scribing() {
  const classes = useStyles();

  return (
    <Saver
      title="Scribing"
      text="What’s the ONE Thing I can do today such that by doing it everything else will be easier or unnecessary?"
    >
      <CardContent>
        <TextField className={classes.input} multiline />
      </CardContent>
    </Saver>
  );
}

export default Scribing;
