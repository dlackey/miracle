import { useEffect, useState } from 'react';
import { Fab, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/icons/Timer';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}));

function Timer() {
  const [time, setTime] = useState(0);
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

  const content = (time === 0) ? <Icon /> : <Typography>{time}</Typography>;

  return (
    <Fab color="primary" className={classes.fab} onClick={handleClick}>
      {content}
    </Fab>
  );
}

export default Timer;
