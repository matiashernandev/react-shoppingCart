import { useId } from "react";
import useCart from "../hooks/useCart";
import "./Cart.css";
import CartItem from "./CartItem";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";

export default function Cart() {
	const cartCheckboxId = useId();
	const { cart, addToCart, clearCart } = useCart();

	return (
		<>
			<label className="cart-button" htmlFor={cartCheckboxId}>
				<CartIcon />
			</label>
			<input type="checkbox" id={cartCheckboxId} hidden />

			<aside className="cart">
				<ul>
					{cart.map((product) => (
						<CartItem
							key={product.id}
							addToCart={() => addToCart(product)}
							{...product}
						/>
					))}
				</ul>

				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	);
}
