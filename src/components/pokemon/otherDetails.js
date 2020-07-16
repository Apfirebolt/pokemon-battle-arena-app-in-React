import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "80%",
    margin: "1rem auto",
    backgroundColor: "azure"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    backgroundColor: "#FFF",
    padding: "1rem"
  },
  pos: {
    margin: 16,
  },
  sub_title: {
    margin: 16,
    fontWeight: 600
  },
});

export default function PokemonCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { name, pokedex, experience, pokemon_height, pokemon_weight, pokemon_area } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Pokemon Name - {name.toUpperCase()}
        </Typography>
        <Typography className={classes.sub_title} variant="h5" component="h2">
          Pokedex Number - {pokedex}
        </Typography>
        <Typography className={classes.sub_title} variant="h5" component="h2">
          Base Experience - {experience}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Height - {pokemon_height}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Weight - {pokemon_weight}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Areas Found in {pokemon_area}</Button>
      </CardActions>
    </Card>
  );
}