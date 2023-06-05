import { useState } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import { IS_DEVELOPMENT } from "./config";
import useFilters from "./hooks/useFilters";
import { products as initialProducts } from "./mocks/products.json";

export default function App() {
	const [products, setProducts] = useState(initialProducts);
	const { filterProducts } = useFilters();

	const filteredProducts = filterProducts(products);

	return (
		<>
			<Header />
			<Products products={filteredProducts} />
			{IS_DEVELOPMENT && <Footer />}
		</>
	);
}
