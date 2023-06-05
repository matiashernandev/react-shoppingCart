import Products from "./components/Products";
import { products } from "./mocks/products.json";

export default function App() {
	return (
		<div>
			<Products products={products} />
		</div>
	);
}
