import "./Footer.css";

export function Footer({ filters }) {
	return (
		<footer className="footer">
			<h4>Prueba técnica de React ⚛️</h4>
			<h5>Shopping Cart con useContext & useReducer</h5>
			<h3>Arroyo Matías Hernán</h3>
			{JSON.stringify(filters, null, 2)}
		</footer>
	);
}
