import React, { useState, useEffect } from "react";
import { formatPrice } from "../../utils/helpers";
import axios from "axios";
import ResumeCart from "../ResumeCart";
import { 
  Main,
  MainTitle,
  SubText,
  Row,
  Container, 
  Block, 
  Image,
  InfoItems,
  Title, 
  Price, 
  Button,
  LoadingContainer,
  LoadingSpin
} from './styles'



const URL = 'https://us-central1-techtaskapi.cloudfunctions.net/offers'

const Cart = () => {
  const storage = window.localStorage.getItem('selectedProducts') 
  const storageSelectedProducts = storage ? JSON.parse(storage) : undefined
  const [productsList, setProductsList] = useState([])
  const [selectedProducts, setSelectedProducts] = useState(storageSelectedProducts ?? [])

  
  const addProduct = (product) => {
    const isProductSelected = selectedProducts.some((selectProduct) => selectProduct.id === product.id)
    if (isProductSelected) {
      const setQuantity = selectedProducts.map((currentProduct) => {
        if (currentProduct.id === product.id) {
          return {...currentProduct, quantity: currentProduct.quantity + 1}
        }
        return currentProduct
      }) 
      setSelectedProducts(setQuantity)
      return
    }
    const newProduct = {...product, quantity: 1, totalPrice: product.price}
    setSelectedProducts([...selectedProducts, newProduct])
  }
  

  useEffect(() => {
    axios.get( URL ).then( response => {
      setProductsList(response.data.items);
    });
  }, []);


  useEffect(() => {
    window.localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts))
  }, [selectedProducts])
  

  return (
    <Main>
      <MainTitle>Our products</MainTitle>
      <SubText>Select your favorite products</SubText> 
      <Row>
        <Container>
          {
            productsList.length > 0 ?  
              productsList.map( (product, id) =>
                <Block key={product.id}>
                  <Image src={product.image} alt="altImage" />
                  <InfoItems>
                    <Title>{product.title}</Title>
                    <Price>{formatPrice(product.price)}</Price>
                     <Button onClick={() => addProduct(product)} >Add to Cart</Button>
                  </InfoItems>
               </Block>  
              ) : <LoadingContainer> <LoadingSpin />Loading...</LoadingContainer>
          }
       </Container>
       <ResumeCart 
         selectedProducts={selectedProducts} 
         setSelectedProducts={setSelectedProducts} 
       />
      </Row>
    </Main>
  )}


export default Cart;