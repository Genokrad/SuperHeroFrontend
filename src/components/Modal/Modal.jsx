import { HeroDetails } from 'components/HeroDetails';
import { MyForm } from 'components/MyForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setModal, setModalType } from 'redux/modal/slice';
const { Stack } = require('@mui/material');

const Modal = () => {
  const modalType = useSelector(state => state.modal.modalType);
  const currentHero = useSelector(state => state.hero.currentHero);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const changeTypeOfModal = type => {
    dispatch(setModalType(type));
  };

  const closeModal = () => {
    // Вызываем экшн для закрытия модального окна
    dispatch(setModalType(null));
    dispatch(setModal(false));
    navigate(-1);
  };

  return (
    <Stack
      onClick={closeModal}
      className="backdrop"
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000000a4',
        position: 'absolute',
        zIndex: 2,
        top: 0,
        left: 0,
      }}
    >
      <Stack
        onClick={e => e.stopPropagation()}
        sx={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 3,
          padding: '24px',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          maxWidth: '80%',
          maxHeight: '80%',
          overflow: 'auto',
        }}
      >
        {modalType === 'heroLearnMore' && (
          <HeroDetails
            currentHero={currentHero}
            changeTypeOfModal={changeTypeOfModal}
            navigateBack={navigateBack}
          />
        )}
        {modalType === 'heroEdit' && (
          <MyForm
            currentHero={currentHero}
            changeTypeOfModal={changeTypeOfModal}
            modalType={modalType}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default Modal;
