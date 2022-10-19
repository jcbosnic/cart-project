import React from 'react'
import { 
  ModalBackground, 
  MainModal,
  ModalText,
  ActionModalButton,
  ModalButtonPrimary,
  ModalButtonSecondary
} from './styles'

const Modal = ({removeProduct, setProductToRemove}) => {
  return (
    <ModalBackground>
      <MainModal>
        <ModalText>Are you sure you want to delete this product?</ModalText>
          <ActionModalButton>
            <ModalButtonSecondary onClick={() => setProductToRemove(undefined)}>Cancel</ModalButtonSecondary>
            <ModalButtonPrimary onClick={() => removeProduct()}>Ok</ModalButtonPrimary>
          </ActionModalButton>
      </MainModal>
    </ModalBackground>
  )
}

export default Modal;