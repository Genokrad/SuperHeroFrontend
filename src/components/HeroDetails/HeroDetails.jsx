const {
  Typography,
  Divider,
  CardMedia,
  Button,
  Box,
} = require('@mui/material');

const HeroDetails = ({ currentHero, changeTypeOfModal, navigateBack }) => {
  return (
    <>
      <Typography
        variant="p"
        sx={{ marginBottom: '16px', color: '#00000079', fontSize: '12px' }}
      >
        {currentHero._id}
      </Typography>
      <Divider sx={{ marginBottom: '16px' }} />
      <CardMedia
        sx={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '56.25%',
          position: 'relative',
        }}
      >
        <img
          src={`https://superhero-fszo.onrender.com/${currentHero.imageUrl}`}
          alt={currentHero.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </CardMedia>
      <Typography variant="h3" sx={{ marginTop: '16px', alignSelf: 'center' }}>
        {currentHero.nickname}
      </Typography>
      <Divider sx={{ marginBottom: '16px', marginTop: '8px' }} />
      <Typography variant="p">Real name : {currentHero.real_name}</Typography>
      <Divider sx={{ marginBottom: '16px', marginTop: '8px' }} />
      <Typography variant="p">
        Catch phrase : {currentHero.catch_phrase}
      </Typography>
      <Divider sx={{ marginBottom: '16px', marginTop: '8px' }} />
      <Typography variant="p">
        About hero : {currentHero.origin_description}
      </Typography>
      <Divider sx={{ marginBottom: '16px', marginTop: '8px' }} />
      <Typography variant="p">
        Super power : {currentHero.superpowers}
      </Typography>
      <Divider sx={{ marginBottom: '16px', marginTop: '8px' }} />
      <Box mt={2} display={'flex'} justifyContent={'center'} gap={'16px'}>
        <Button
          onClick={() => changeTypeOfModal('heroEdit')}
          variant="contained"
          color="primary"
        >
          Edit
        </Button>
        <Button onClick={navigateBack} variant="contained" color="primary">
          Back
        </Button>
      </Box>
    </>
  );
};

export default HeroDetails;
