import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import RayquazaImage from './rayquaza-mega.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'grey',
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
            The latest Pokémon Presents has just finished airing, and it revealed a new Pokémon spin-off game called Pokémon Unite. Developed by Tencent Games and Timi Studios, it is a team-based multiplayer battle game for Nintendo Switch and mobile devices.

            In Pokémon Unite there are two teams of five Pokémon. Each side has five goals which the opposing team must reach to score points. Points are also scored by catching wild Pokémon along the way. Each controllable Pokémon starts at level 1 and can level up, evolve, and learn new moves as the match progresses.

            The full presentation including some gameplay can be seen here:
          </p>
        </Grid>
      </Grid>
      <Grid item xs={12} s={4}>
        <Grid container justify="center" spacing={spacing}>
          <p>
            The latest Pokémon Presents has just finished airing, and it revealed a new Pokémon spin-off game called Pokémon Unite. Developed by Tencent Games and Timi Studios, it is a team-based multiplayer battle game for Nintendo Switch and mobile devices.

            In Pokémon Unite there are two teams of five Pokémon. Each side has five goals which the opposing team must reach to score points. Points are also scored by catching wild Pokémon along the way. Each controllable Pokémon starts at level 1 and can level up, evolve, and learn new moves as the match progresses.

            The full presentation including some gameplay can be seen here:
          </p>
        </Grid>
      </Grid>
      <Grid item xs={12} s={4}>
        <Grid container justify="center" spacing={spacing}>
          <p>
            The latest Pokémon Presents has just finished airing, and it revealed a new Pokémon spin-off game called Pokémon Unite. Developed by Tencent Games and Timi Studios, it is a team-based multiplayer battle game for Nintendo Switch and mobile devices.

            In Pokémon Unite there are two teams of five Pokémon. Each side has five goals which the opposing team must reach to score points. Points are also scored by catching wild Pokémon along the way. Each controllable Pokémon starts at level 1 and can level up, evolve, and learn new moves as the match progresses.

            The full presentation including some gameplay can be seen here:
          </p>
          <img src={RayquazaImage} alt="Logo" height="400" width="400" />;
        </Grid>
      </Grid>
    </Grid>
  );
}