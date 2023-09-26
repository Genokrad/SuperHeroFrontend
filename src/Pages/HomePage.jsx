import { Stack, Typography } from '@mui/material';
import { MyForm } from 'components/MyForm';

const HomePage = () => {
  return (
    <Stack
      sx={{
        gap: '32px',
        backgroundColor: '#ed0a0a6c',
        height: '100%',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ textAlign: 'center' }} color={'white'} variant="h1">
        Statr your hero collection!
      </Typography>
      <MyForm />
    </Stack>

    // <ul className="filmList">
    //   {loading && <Loader />}
    //   {movies.map(movie => (
    //     <li key={movie.id}>
    //       <div className="movie-wraper">
    //         <img
    //           src={
    //             movie.poster_path
    //               ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    //               : worker
    //           }
    //           alt={movie.name || movie.original_name}
    //           height="400"
    //           width="300"
    //           className="castImg"
    //         />
    //         <div className="movie-name">
    //           <Link to={`movies/${movie.id}`}>
    //             <span className="movieNameText">{movie.title}</span>
    //           </Link>
    //         </div>
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default HomePage;
