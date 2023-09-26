import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  FormControl,
  // InputLabel,
  Input,
  TextareaAutosize,
  Box,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addHeroToDb } from 'redux/heroes/slice';

const initialFormData = {
  nickname: '',
  real_name: '',
  origin_description: '',
  superpowers: '',
  catch_phrase: '',
};

const MyForm = ({ changeTypeOfModal, modalType, currentHero }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    nickname: '',
    real_name: '',
    origin_description: '',
    superpowers: '',
    catch_phrase: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = e => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] }); // Здесь используется files[0] для выбора первого загруженного файла
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addHeroToDb(formData));
    // Отправка данных формы на сервер или выполнение другой логики здесь
    console.log(formData);

    setFormData(initialFormData);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: 'var(--third-color-transparent)',
        borderRadius: '24px',
        padding: '32px',
        alignItems: 'center',
      }}
    >
      {console.log(formData)}
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
        />
        <TextField
          label="Real Name"
          name="real_name"
          value={formData.real_name}
          onChange={handleInputChange}
        />
        <TextareaAutosize
          minRows={3}
          placeholder="Origin Description"
          name="origin_description"
          value={formData.origin_description}
          onChange={handleInputChange}
        />
        <TextareaAutosize
          minRows={3}
          placeholder="Superpowers"
          name="superpowers"
          value={formData.superpowers}
          onChange={handleInputChange}
        />
        <TextField
          label="Catch Phrase"
          name="catch_phrase"
          value={formData.catch_phrase}
          onChange={handleInputChange}
        />
        <FormControl>
          {/* <InputLabel>Images</InputLabel> */}
          <Input
            type="file"
            name="image"
            onChange={handleImageChange}
            multiple
          />
        </FormControl>
        <Box mt={2} display={'flex'} justifyContent={'center'} gap={'16px'}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {modalType && (
            <Button
              onClick={() => changeTypeOfModal('heroLearnMore')}
              variant="contained"
              color="primary"
              type="button"
            >
              To hero
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default MyForm;
