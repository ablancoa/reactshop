import React, { useContext } from 'react';
import AppContext from '../context/AppContext.js'
import '@styles/ProductItem.scss';

import addToCartIcon from "@icons/bt_add_to_cart.svg"

const ProductItem = (props) => {
	const product = props.product;

	const { addToCart } = useContext(AppContext);

	function handleCart(item) {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleCart(product)}>
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>

		</div>
	);
}

export default ProductItem;
