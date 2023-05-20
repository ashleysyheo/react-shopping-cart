import { useRecoilState } from 'recoil';

import { errorModalMessageState } from '../../../store/error';
import Modal from '../Modal/Modal';
import * as S from './ErrorModal.styles';

const ErrorModal = () => {
  const [errorMessage, setErrorMessage] = useRecoilState(errorModalMessageState);

  const handleClose = () => {
    setErrorMessage(null);
  };

  return (
    <Modal isOpen={!!errorMessage} handleClose={handleClose}>
      <S.ErrorModalContentContainer>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        <S.ErrorModalCloseButton variant="textButton" onClick={handleClose}>
          확인
        </S.ErrorModalCloseButton>
      </S.ErrorModalContentContainer>
    </Modal>
  );
};

export default ErrorModal;
