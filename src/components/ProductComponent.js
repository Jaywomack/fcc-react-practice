import React from 'react'

function Product(props) {
    return(
        <div>
            <p>id:{props.products.id}</p>
            <p>name:{props.products.name}</p>
            <p>price:{props.products.price}</p>
            <p>description:{props.products.description}</p>
        </div>
    )
}

export default Product