import { Routes, Route } from 'react-router-dom';

import { HeroesPage, HomePage } from 'Pages';
// import { HeroDetails } from './HeroDetails';
import { Layout } from './Layout';
import { Modal } from './Modal';

// const heroes = [
//   {
//     _id: '017e2f93-a782-44ec-bb08-a0b4308f41c0',
//     nickname: 'bakuman',
//     real_name: 'Batman',
//     origin_description: 'Batman',
//     superpowers: 'Money',
//     catch_phrase: 'Batman',
//     imageUrl: 'heroes/017e2f93-a782-44ec-bb08-a0b4308f41c0.webp',
//     createdAt: '2023-09-22T17:44:29.104+00:00',
//     updatedAt: '2023-09-22T19:17:02.593+00:00',
//   },
//   {
//     _id: 'c81444a3-4fa5-4dc6-a755-85c3d508731b',
//     nickname: 'benzaMen',
//     real_name: 'Clark Kent',
//     origin_description:
//       'he was born Kal-El on the planet Krypton, before being rocketed to Ear…',
//     superpowers:
//       'solar energy absorption and healing factor, solar flare and heat visio…',
//     catch_phrase:
//       "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
//     imageUrl: 'heroes/c81444a3-4fa5-4dc6-a755-85c3d508731b.webp',
//     createdAt: '2023-09-22T18:22:28.120+00:00',
//     updatedAt: '2023-09-22T20:04:52.469+00:00',
//   },
// ];

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="heroes" element={<HeroesPage />}>
            <Route path=":heroId" element={<Modal />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
