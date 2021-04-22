import React from 'react';

const Products = ({product, addToCart}) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <button onClick={() => addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Products;