import styled from 'styled-components'

interface AlertModalType {
  text: string
  closeModal: () => void
}

const AlertModal = ({ text, closeModal }: AlertModalType) => {
  return (
    <ModalBackground onClick={closeModal}>
      <Modal>
        <p>{text}</p>
        <StyledButton
          type="button"
          aria-label="모달 닫기 버튼"
          onClick={closeModal}>
          확인
        </StyledButton>
      </Modal>
    </ModalBackground>
  )
}

export default AlertModal

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  height: 100svh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Modal = styled.div`
  background-color: #fff;
  border: 0.2rem solid ${p => p.theme.color.gray300};
  border-radius: 8px;
  padding: 5rem 4rem 3.2rem;
  font-size: ${p => p.theme.fontSize.md};
  line-height: 1;
  width: fit-content;
  text-align: center;
`

const StyledButton = styled.button`
  background-color: ${p => p.theme.color.yellow100};
  font-size: ${p => p.theme.fontSize.sm};
  line-height: 1;
  padding: 1.2rem;
  border-radius: 8px;
  margin-top: 30px;
  width: 100%;
`
