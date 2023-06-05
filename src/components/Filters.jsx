import { useState } from "react";
import "./filters.css";

export default function Filters({ onChange }) {
	const [minPrice, setMinPrice] = useState(0);

	const handleChangeMinPrice = (e) => {
		setMinPrice(e.target.value);
		onChange((prevState) => ({
			...prevState,
			minPrice: e.target.value,
		}));
	};

	const handleChangeCategory = (e) => {
		onChange((prevState) => ({
			...prevState,
			category: e.target.value,
		}));
	};

	return (
		<section className="filters">
			<div>
				<label htmlFor="price">Precio mínimo</label>
				<input
					onChange={handleChangeMinPrice}
					type="range"
					id="price"
					min={0}
					max={1000}
				/>
				<span>{minPrice}</span>
			</div>
			<div>
				<label htmlFor="category">Categoría</label>
				<select onChange={handleChangeCategory} id="category">
					<option value="all">Todo</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">Celulares</option>
				</select>
			</div>
		</section>
	);
}
