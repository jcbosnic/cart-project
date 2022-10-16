import styled from 'styled-components';

export const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 100%;
`

export const MainTitle = styled.h1`
  border-bottom: 1px solid #333333;
  color: #333333;
  font-size: 24px;
  margin: 0 0 5px 0;
  padding: 0 0 5px 0;
  width: 100%;
`

export const SubText = styled.h4`
 color: #333333;
 font-size: 18px;
 font-weight: normal;
 margin: 0;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1000px;
`
export const Block = styled.div`
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: center;
  margin: 20px 0 0;
  padding: 15px;
`
export const Image = styled.img`
  border-radius: 5px;
  max-height: 250px;
  width: 100%;

`
export const InfoItems = styled.div`
  margin:  auto 0 0;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 5px 0 0;
`
export const Brand = styled.p`
  font-size: 14px;
`
export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
`
export const Button = styled.button`
  align-items: center;
  background: #0B65C2;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 100%;
`

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 80%;
`

export const LoadingSpin = styled.div `
  animation: LoadingSpin 1s linear infinite;
	border: 0.4em solid transparent;
	border-color: #eee;
	border-radius: 50%;
	border-top-color: #3E67EC;
	height: 2.5em;
	pointer-events: none;
	width: 2.5em;
}

@keyframes LoadingSpin {
	100% {
	  transform: rotate(360deg)
	}
`