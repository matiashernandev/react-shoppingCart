import { useState } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import { IS_DEVELOPMENT } from "./config";
import { products as initialProducts } from "./mocks/products.json";

export function useFilters() {
	const [filters, setFilters] = useState({
		category: "all",
		minPrice: 0,
	});

	const filterProducts = (products) => {
		return products.filter((product) => {
			return (
				product.price >= filters.minPrice &&
				(filters.category === "all" || product.category === filters.category)
			);
		});
	};
	return { filters, filterProducts, setFilters };
}

export default function App() {
	const [products, setProducts] = useState(initialProducts);
	const { filters, filterProducts, setFilters } = useFilters();

	const filteredProducts = filterProducts(products);

	return (
		<>
			<Header changeFilters={setFilters} />
			<Products products={filteredProducts} />
			{IS_DEVELOPMENT && <Footer filters={filters} />}
		</>
	);
}
