import { useId } from "react";
import "./Cart.css";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";

export default function Cart() {
	const cartCheckboxId = useId();
	return (
		<>
			<label className="cart-button" htmlFor={cartCheckboxId}>
				<CartIcon />
			</label>
			<input type="checkbox" id={cartCheckboxId} hidden />

			<aside className="cart">
				<ul>
					<li>
						<img
							src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
							alt="iPhone"
						/>
						<div>
							<strong>iPhone</strong>$1499
							<footer>
								<small>Qty: 1</small>
								<button>+</button>
							</footer>
						</div>
					</li>
				</ul>

				<button>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	);
}
