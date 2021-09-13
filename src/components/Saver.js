import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(2),
  },
}));

function Saver({ title, text, children }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">
          {title}
        </Typography>
        <Typography color="textSecondary" variant="body1" component="div">
          {text}
        </Typography>
      </CardContent>
      {children}
    </Card>
  );
}

function SaverAction({ text, href }) {
  return (
    <CardActions>
      <Button color="primary" href={href} target="_blank">{text}</Button>
    </CardActions>
  );
}

export { Saver, SaverAction };
