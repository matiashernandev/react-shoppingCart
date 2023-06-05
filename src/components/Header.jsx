import Filters from "./Filters";

export default function Header({ changeFilters }) {
	return (
		<div>
			<h1>React Shop 🛒</h1>

			<Filters onChange={changeFilters} />
		</div>
	);
}
