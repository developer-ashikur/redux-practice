import React from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import { addToCart } from '../redux/actions/cartActions';

const Shop = ({products, addToCart}) => {
    return (
        <div>
            {
                products.map(pd => <Products product={pd} key={pd.id} addToCart={addToCart}></Products>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = {
    addToCart: addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);