import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 220,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=396488751"
          title="Contemplative Reptile"
        />
        <CardContent>   
          <Typography gutterBottom variant="h5" component="h2">
            TV Samsung
          </Typography>
          <Typography gutterBottom variant="h5" component="h5">
            preço: R$15
          </Typography>
          <Typography component="p">
           TV 32'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{alert('butão valha')}} >
            valha
        </Button>
        <Button size="small" color="primary" onClick={()=>{alert('butão Learn more')}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
