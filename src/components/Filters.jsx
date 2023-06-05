import { useId } from "react";
import useFilters from "../hooks/useFilters";
import "./filters.css";

export default function Filters() {
	const { setFilters, filters } = useFilters();

	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	const handleChangeMinPrice = (e) => {
		setFilters((prevState) => ({
			...prevState,
			minPrice: e.target.value,
		}));
	};

	const handleChangeCategory = (e) => {
		setFilters((prevState) => ({
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
				<span>${filters.minPrice}</span>
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
