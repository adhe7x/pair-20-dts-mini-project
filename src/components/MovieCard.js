import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MovieCard() {

    return (
        <Card sx={{ maxWidth: 345, mt: 15, mr: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="http://placekitten.com/500/500"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                2012
              </Typography>
              <Rating name="read-only" value={4} readOnly />
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Detail
            </Button>
          </CardActions>
        </Card>
      );
}
