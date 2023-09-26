import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalType: null,
  modal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { setModalType, setModal } = modalSlice.actions;

export default modalSlice.reducer;
