import React from 'react'
import productsData from './products'
import Product from './ProductComponent';

function App() {
  const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App