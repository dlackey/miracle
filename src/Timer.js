import { useEffect, useState } from 'react';
import { Fab, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

function Timer() {
  const [time, setTime] = useState(60);
  const [start, setStart] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (start)
        setTime(Math.max(time - 1, 0))
    }, 1000);
    return () => clearInterval(interval);
  }, [start, time]);

  function handleClick() {
    setTime(60);
    setStart(true);
  }

  const classes = useStyles();

  return (
    <Fab color='primary' className={classes.fab} onClick={handleClick}>
      <Typography>{time}</Typography>
    </Fab>
  );
}

export default Timer;
