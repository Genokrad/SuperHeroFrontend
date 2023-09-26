import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const HeroCard = ({ hero, idSetter, deletHeroCard }) => {
  const fetchImg = hero => {
    return `http://localhost:3006/${hero.imageUrl}`;
  };

  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardMedia sx={{ height: 300 }} image={fetchImg(hero)} />
      <CardContent sx={{ height: '140px' }}>
        <Stack sx={{ height: '60%', fontSize: '20px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {hero.nickname}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {hero.real_name}
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            height: '40%',
            fontSize: '16px',
          }}
        >
          {hero.origin_description}
        </Typography>
      </CardContent>
      <div style={{ flexGrow: 1 }}></div>{' '}
      {/* Добавляем пустой блок, чтобы выровнять CardActions внизу */}
      <CardActions>
        <Button onClick={() => idSetter(hero._id, 'heroEdit')} size="small">
          <EditIcon />
        </Button>
        <Button
          onClick={() => idSetter(hero._id, 'heroLearnMore')}
          size="small"
        >
          <ZoomInIcon />
        </Button>
        <Button onClick={() => deletHeroCard(hero._id)} size="small">
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default HeroCard;
