import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// http://localhost:3006/api/heroes?page=1&pageSize=5
const initialState = {
  currentHero: null,
  allHero: [],
  // page: 1,
};

export const getHeroes = createAsyncThunk(
  'hero/getHeroes',
  async (page, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      `http://localhost:3006/api/heroes?page=${page}&pageSize=5`
    );
    // console.log(result);
    dispatch(setAllHero(result.data));
  }
);

export const addHeroToDb = createAsyncThunk(
  'hero/addHero',
  async (hero, { rejectWithValue, dispatch }) => {
    try {
      const formData = new FormData();
      formData.append('image', hero.image);
      formData.append('jsonData', JSON.stringify(hero));

      const response = await axios.post(
        'http://localhost:3006/api/heroes',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Устанавливаем заголовок Content-Type на multipart/form-data
          },
        }
      );

      dispatch(addHero(response.data));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletHeroById = createAsyncThunk(
  'hero/delHero',
  async (id, { rejectWithValue, dispatch }) => {
    const result = await axios.delete(`http://localhost:3006/api/heroes/${id}`);
    console.log(result);
    dispatch(deleteHero(id));
  }
);

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    setCurrentHero: (state, action) => {
      state.currentHero = action.payload;
    },
    setAllHero: (state, action) => {
      state.allHero = action.payload;
    },
    deleteHero: (state, action) => {
      console.log(action.payload);
      state.allHero.heroes = state.allHero.heroes.filter(
        hero => hero._id !== action.payload
      );
      // console.log(state.allHero);
    },
    addHero: (state, action) => {
      state.allHero.heroes = [...state.allHero.heroes, action.payload];
    },
  },
  extraReducers: {
    [getHeroes.fulfilled]: () => console.log('getHeroes: fullfiled'),
    [getHeroes.pending]: () => console.log('getHeroes: pending'),
    [getHeroes.rejected]: () => console.log('getHeroes: rejected'),
    [deletHeroById.fulfilled]: () => console.log('deletHeroById: fullfiled'),
    [deletHeroById.pending]: () => console.log('deletHeroById: pending'),
    [deletHeroById.rejected]: () => console.log('deletHeroById: rejected'),
    [addHeroToDb.fulfilled]: () => console.log('addHeroToDb: fullfiled'),
    [addHeroToDb.pending]: () => console.log('addHeroToDb: pending'),
    [addHeroToDb.rejected]: () => console.log('addHeroToDb: rejected'),
  },
});

export const { setCurrentHero, setAllHero, deleteHero, addHero } =
  heroSlice.actions;

export default heroSlice.reducer;
