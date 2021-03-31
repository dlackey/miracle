import { useEffect, useState } from 'react';
import Beep from 'browser-beep';
import { Fab, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/icons/Timer';

const INTERVAL = 60000;

const beep = Beep({ frequency: 830, interval: INTERVAL });

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function Timer() {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Math.max(time - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  function handleClick() {
    beep(2);
    setTime(INTERVAL / 1000);
  }

  const classes = useStyles();
  const content = (time <= 0) ? <Icon /> : <Typography>{time}</Typography>;

  return (
    <Fab color="primary" className={classes.fab} onClick={handleClick}>
      {content}
    </Fab>
  );
}

export default Timer;
