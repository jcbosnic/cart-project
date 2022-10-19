import {useState} from 'react'
import { formatPrice } from '../../utils/helpers'
import Modal from '../Modal'
import {
  ListCart,
  HeaderListCart,
  MainTitle,
  CircleQuantity,
  RowProductsCart,
  ImageProductCart,
  ButtonDelete,
  ProductCartTitle,
  ProductCartPrice,
  MainListCart,
  ContainerEmptyCart,
  ImgEmptyCart,
  TextEmptyCart,
  ContainerActionQuantity,
  ActionCounter,
  CounterQuantity,
  CartPricesSection,
  TotalPriceCart
} from './styles'


const ResumeCart = ({ selectedProducts, setSelectedProducts }) => {
  const [productToRemove, setProductToRemove] = useState()


  const deleteProduct = (product) => {
    const filterProduct = selectedProducts.filter( selectProduct => selectProduct.id !== product.id)
    setSelectedProducts(filterProduct)
  }
  

  const productsData = () => {
    return selectedProducts.reduce((acc, currentProduct) => {
      return acc = {
        totalQuantity: acc.totalQuantity + currentProduct.quantity,
        totalPrice: acc.totalPrice + (currentProduct.price * currentProduct.quantity)
      }
    }, { totalQuantity: 0, totalPrice: 0 })
  }


  const addProduct = (product) => {
    const newProductList = selectedProducts.map((currentProduct) => {
      if (currentProduct.id === product.id) {
        return {...currentProduct, quantity: currentProduct.quantity + 1, totalPrice: currentProduct.totalPrice + currentProduct.price}
      }
      return currentProduct
      })
      setSelectedProducts(newProductList)
  }


  const lessProduct = (product) => {
    if (product.quantity === 1) {
      setProductToRemove(product)
      return
  }


  const newProductList = selectedProducts.map((currentProduct) => {
    if (currentProduct.id === product.id) {
      return {...currentProduct, quantity: currentProduct.quantity - 1, totalPrice: currentProduct.totalPrice - currentProduct.price}
    }
      return currentProduct
    })
      setSelectedProducts(newProductList)
  }


  const removeProduct = () => {
    deleteProduct(productToRemove)
    setProductToRemove(undefined)
  }

  return (
    <ListCart>
      <HeaderListCart>
        <MainTitle>My products</MainTitle>
        <CircleQuantity>
          {productsData().totalQuantity}
        </CircleQuantity>
      </HeaderListCart>
      <MainListCart>
        {     
          selectedProducts.length > 0 ?
            selectedProducts.map((product, id) => 
                <RowProductsCart key={product.id}>
                  <ImageProductCart src={product.image} alt="altImage" />
                    <div>
                      <ProductCartTitle>{product.title}</ProductCartTitle>
                        <ContainerActionQuantity>
                          <ActionCounter onClick={() => lessProduct(product)}>-</ActionCounter>
                          <CounterQuantity>{product.quantity}</CounterQuantity>
                          <ActionCounter onClick={() => addProduct(product)} >+</ActionCounter>
                        </ContainerActionQuantity>
                    </div>
                    <CartPricesSection>  
                      <ProductCartPrice>{formatPrice(product.price)}</ProductCartPrice>
                      <ProductCartPrice>{formatPrice(product.price * product.quantity)}</ProductCartPrice>
                      <ButtonDelete onClick={() => setProductToRemove(product)}>Delete</ButtonDelete>
                    </CartPricesSection>
                </RowProductsCart>
            ): 
            <ContainerEmptyCart>
              <ImgEmptyCart />
              <TextEmptyCart>Your cart is empty</TextEmptyCart>
            </ContainerEmptyCart>
        }
        </MainListCart>
        {productToRemove && (
          <Modal  removeProduct={removeProduct} setProductToRemove={setProductToRemove}/>
          )}
        <TotalPriceCart>Total: <span>{formatPrice(productsData().totalPrice)}</span></TotalPriceCart>
    </ListCart>
  )
}

export default ResumeCart;