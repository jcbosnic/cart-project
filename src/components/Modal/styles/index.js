import styled from "styled-components";

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.7); 
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

export const MainModal = styled.div`
  align-items: center;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  margin: 20% auto;
  width: 500px;
`

export const BlockModal = styled.div`
  align-items: center;
  display: flex;
`

export const ModalText = styled.p`
  font-size: 18px;
  font-weight: bold;
`

export const ActionModalButton = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: 320px;
`

export const ModalButtonPrimary = styled.button`
  align-items: center;
  background: #0B65C2;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 150px;
`

export const ModalButtonSecondary = styled.button`
  align-items: center;
  background: #CCCCCC;
  border: none;
  border-radius: 8px;
  color: #333333;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 150px;
`