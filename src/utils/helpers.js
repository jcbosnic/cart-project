export const formatPrice = (price) => {
    return new Intl.NumberFormat( 'ES-CL', {
      style: 'currency',
      currency: 'CLP' 
    }).format(price)
  }
