import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'red',
    color: 'white',
    marginTop: '1rem'
  },
}));

export default function Footer() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} s={4}>
        <Grid container justify="center" spacing={spacing}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores deleniti distinctio
            dolorum facilis illo laboriosam nihil non. Ad eaque explicabo id ipsum labore nam odit perferendis
            repellat reprehenderit vitae.
          </p>
        </Grid>
      </Grid>
      <Grid item xs={12} s={4}>
        <Grid container justify="center" spacing={spacing}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores deleniti distinctio
            dolorum facilis illo laboriosam nihil non. Ad eaque explicabo id ipsum labore nam odit perferendis
            repellat reprehenderit vitae.
          </p>
        </Grid>
      </Grid>
      <Grid item xs={12} s={4}>
        <Grid container justify="center" spacing={spacing}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores deleniti distinctio
            dolorum facilis illo laboriosam nihil non. Ad eaque explicabo id ipsum labore nam odit perferendis
            repellat reprehenderit vitae.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
}