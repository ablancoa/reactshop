import React from 'react';
import '@styles/ProductItem.scss';

import addToCart from "@icons/bt_add_to_cart.svg"

const ProductItem = (props) => {
	const product = props.product;

	const [cart, setCart] = React.useState([]);

	function handleCart() {
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleCart}>
					<img src={addToCart} alt="" />
				</figure>
			</div>

		</div>
	);
}

export default ProductItem;
