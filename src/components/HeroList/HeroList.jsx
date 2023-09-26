import { nanoid } from 'nanoid';

import { HeroCard } from 'components/HeroCard';
import { StiledList } from './HeroList.styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  deletHeroById,
  deleteHero,
  getHeroes,
  setCurrentHero,
} from 'redux/heroes/slice';
import { setModal, setModalType } from 'redux/modal/slice';
import { HeroPagination } from 'components/Pagination';

const { Stack } = require('@mui/material');

// const heroes = [
//   {
//     _id: 'b2dcbd44-d437-417f-b122-cc24247189bf',
//     nickname: 'Железный человек',
//     real_name: 'Красивое',
//     origin_description: 'Спаял себе костюм на базе террористов и бла-бла-бла.',
//     superpowers: 'Сильно богатый и умныйй',
//     catch_phrase: 'Ракета-бабах',
//     imageUrl: 'heroes/b2dcbd44-d437-417f-b122-cc24247189bf.jpg',
//     createdAt: '2023-09-25T10:07:03.917Z',
//     updatedAt: '2023-09-25T10:07:03.917Z',
//   },
//   {
//     _id: 'aa7859f7-4f68-4508-8ddb-422b65d47890',
//     nickname: 'Человек Паук',
//     real_name: 'Паук',
//     origin_description: 'Сшил себе костюм и бла-бла-бла....',
//     superpowers: 'паутина, просто типо сильный , быстрый ловкий',
//     catch_phrase: 'Ваш сосед!',
//     imageUrl: 'heroes/aa7859f7-4f68-4508-8ddb-422b65d47890.jpg',
//     createdAt: '2023-09-25T10:07:33.057Z',
//     updatedAt: '2023-09-25T10:07:33.057Z',
//   },
//   {
//     _id: '1ff3b5c5-dbed-4bad-a1bb-f5c87acd2d5f',
//     nickname: 'Тор',
//     real_name: 'Тор',
//     origin_description:
//       'Родился богом, обиженка, папа не понимал, тор плакал. очень жаль малого....',
//     superpowers: 'Молот',
//     catch_phrase: 'молоток - голова - бум- бум',
//     imageUrl: 'heroes/1ff3b5c5-dbed-4bad-a1bb-f5c87acd2d5f.jpg',
//     createdAt: '2023-09-25T10:10:12.025Z',
//     updatedAt: '2023-09-25T10:10:12.025Z',
//   },
//   {
//     _id: '32ba8724-2e44-4c1c-b307-ae4603b72496',
//     nickname: 'Локки',
//     real_name: 'Локки',
//     origin_description:
//       'Родился богом, обиженка, папа не людбил, маминькин сын. много плакал,поведение как и нехорошего кота, не люит лотки...',
//     superpowers: 'Умеет обманывать и кидать пыль в глаза',
//     catch_phrase: 'Почему меня не люит папа, хнык-хнык',
//     imageUrl: 'heroes/32ba8724-2e44-4c1c-b307-ae4603b72496.jpg',
//     createdAt: '2023-09-25T10:11:57.328Z',
//     updatedAt: '2023-09-25T10:11:57.328Z',
//   },
//   {
//     _id: 'cc8c142a-b777-4474-8ed7-20a1b0a9173e',
//     nickname: 'Алая ведьма',
//     real_name: 'Длинное',
//     origin_description:
//       'Родилась в братиславе, любила брата но он погиб, хнык... , сильный герой , молодец, не любит рыжий цвет и костры',
//     superpowers: 'ведьма',
//     catch_phrase: 'Только не на костер!',
//     imageUrl: 'heroes/cc8c142a-b777-4474-8ed7-20a1b0a9173e.jpg',
//     createdAt: '2023-09-25T10:14:09.950Z',
//     updatedAt: '2023-09-25T10:14:09.950Z',
//   },
// ];

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [totalItem, setTotalItem] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const allHeroes = useSelector(state => state.hero.allHero);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setAllHero();
  }, [currentPage]);
  // eslint-disable-line
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
