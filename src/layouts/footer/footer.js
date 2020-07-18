import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from './rayquaza.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "85%",
    margin: "1rem auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p>
              A virtual pokemon battle arena where you can create teams and challenge others for a battle, includes some
              other social networking features currently in development.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur fugit libero molestias nobis
              quis repellat vel! Illo, minus voluptatibus.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Create Your Team
            </Typography>
            <Typography variant="body1" gutterBottom>
              900+ Pokemon and 700+ moves to choose from, create your ultimate team now!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Battle with Friends
            </Typography>
            <Typography variant="body1" gutterBottom>
              Search for other users on this app, their teams, add them as your friends and challenge them for a battle!
            </Typography>

          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="body1" gutterBottom>
              Get all the information you need regarding pokemon types, pokemon moves, pokemon stats, pokemon items and more!
            </Typography>
          </Paper>

        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="body1" gutterBottom>
              This does have some social networking features as well!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam enim excepturi fugiat harum
              laboriosam nesciunt officiis quia quo repellendus vel? Autem beatae cumque doloremque esse, excepturi
              libero minima perspiciatis quasi.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam enim excepturi fugiat harum
              laboriosam nesciunt officiis quia quo repellendus vel? Autem beatae cumque doloremque esse, excepturi
              libero minima perspiciatis quasi.
            </Typography>
            <img src={'./rayquaza.jpg'} alt="" height="300" width="300" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterComponent;