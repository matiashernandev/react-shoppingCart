import { useId, useState } from "react";
import "./filters.css";

export default function Filters({ onChange }) {
	const [minPrice, setMinPrice] = useState(0);

	const minPriceFilterId = useId();
	const categoryFilterId = useId();

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
				<label htmlFor={minPriceFilterId}>Precio mínimo</label>
				<input
					onChange={handleChangeMinPrice}
					type="range"
					id={minPriceFilterId}
					min={0}
					max={1000}
				/>
				<span>{minPrice}</span>
			</div>
			<div>
				<label htmlFor={categoryFilterId}>Categoría</label>
				<select onChange={handleChangeCategory} id={categoryFilterId}>
					<option value="all">Todo</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">Celulares</option>
				</select>
			</div>
		</section>
	);
}
