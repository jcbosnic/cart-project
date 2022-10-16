import styled from 'styled-components'


export const ListCart = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 20px 0 0 auto;
  min-width: 350px;
`

export const HeaderListCart = styled.div`
  align-items: center;
  background: #000000;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  height: 70px;
  padding: 20px;
`

export const CircleQuantity = styled.span`
  align-items: center;
  background: red;
  border-radius: 20px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-weight: bold;
  height: 35px;
  justify-content: center;
  margin: 0 0 0 auto;
  width: 35px;
`

export const MainTitle = styled.h2`
  color: #FFFFFF;
  font-size: 18px;
`

export const MainListCart = styled.div`
  box-sizing: border-box;
 display: flex;
 flex-direction: column;
 padding: 15px;
` 

export const RowProductsCart = styled.div`
  align-items: center;
  background: #F0F0F0;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0 0 10px 0;
  padding: 10px 10px 10px 0;
  width: 100%;
`
export const ImageProductCart = styled.img`
  background-size: 50px 0px;
  height: 50px;
  width: 50px;
`

export const ProductCartTitle = styled.p`
 font-size: 16px;
 margin: 0;
 `
 
 export const ProductCartPrice = styled.p`
  display: flex;
  font-size: 14px; 
  font-weight: bold;
  margin: 0 0 0 auto;
 `

export const ContainerActionQuantity = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  `

export const ActionCounter = styled.span`
  align-items: center;
  background: #0B65C2;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  color: #FFFFFF;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  height: 20px;
  justify-content: center;
  padding: 0 0 2px 0;
  width: 20px;
`

export const CounterQuantity = styled.p`
  font-size: 14px;
  font-weight: bold;
  padding: 0 8px;
`

export const ButtonDelete = styled.p`
  cursor: pointer;  
  font-size: 14px;
  padding: 4px 0 0;
  margin: 0;

  &:hover{
    text-decoration: underline;
  }
`

export const ProductCartQuantity = styled.p`
 font-size: 14px;
`

export const ContainerEmptyCart = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

export const ImgEmptyCart = styled.i`
  background-image: url('https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v2.png');
  background-repeat: no-repeat;
  background-size: 45px 45px;
  height: 45px;
  width: 45px;
`

export const TextEmptyCart = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 10px 0 0;
`

export const CartPricesSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 auto;
  padding: 10px 0 0;
`

export const TotalPriceCart = styled.p`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 0 27px 17px 27px;
  text-align: right;
`



