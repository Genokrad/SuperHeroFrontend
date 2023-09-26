import { nanoid } from 'nanoid';

import { HeroCard } from 'components/HeroCard';
import { StiledList } from './HeroList.styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletHeroById, getHeroes, setCurrentHero } from 'redux/heroes/slice';
import { setModal, setModalType } from 'redux/modal/slice';
import { HeroPagination } from 'components/Pagination';

const { Stack } = require('@mui/material');

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [totalItem, setTotalItem] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const allHeroes = useSelector(state => state.hero.allHero);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setAllHero();
  }, [currentPage]); // eslint-disable-line

  useEffect(() => {
    if (allHeroes) {
      setHeroes(allHeroes.heroes);
      setTotalItem(Math.ceil(allHeroes?.totalItems / 5));
    }
  }, [allHeroes]);

  const setAllHero = () => {
    dispatch(getHeroes(currentPage));
    setHeroes(allHeroes?.heroes);
    setTotalItem(Math.ceil(allHeroes?.totalItems / 5));
  };

  const findHero = id => {
    const hero = heroes.find(hero => hero._id === id);
    return hero;
  };

  const deletHeroCard = id => {
    dispatch(deletHeroById(id));
  };

  const currentIdSetter = (id, mark) => {
    dispatch(setModal(true));
    dispatch(setCurrentHero(findHero(id)));
    dispatch(setModalType(mark));
    navigate(`/heroes/${id}`);
  };

  const hanblePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Stack sx={{ width: '100%' }}>
      <StiledList>
        {heroes?.map(hero => (
          <li key={nanoid()}>
            <HeroCard
              hero={hero}
              idSetter={currentIdSetter}
              deletHeroCard={deletHeroCard}
            />
          </li>
        ))}
      </StiledList>
      <Stack
        mt={4}
        sx={{
          alignItems: 'center',
        }}
      >
        <HeroPagination
          totalItem={Number(totalItem)}
          hanblePage={hanblePage}
          currentPage={currentPage}
        />
      </Stack>
    </Stack>
  );
};

export default HeroList;
