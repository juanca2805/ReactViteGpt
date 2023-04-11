import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./stylesAdmin.css";
import ai from '../../assets/ai.png';

const Admin = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Iniciar sesion</h1>
						<input
							type="email"
							placeholder="Correo"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Contraseña"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<Link to="/Admin">
						<button type="submit" className={styles.green_btn}>
							Iniciar sesion
						</button>
						</Link>
						<Link to="/Index2">
						<button type="button" className={styles.white_btn}>
							Salir
						</button>
					</Link>
					</form>
				</div>
				<div className={styles.right}>
					<h1>Nuevo aqui ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Registrarse
						</button>
					</Link>
				</div>
			</div>
			<div >
      <img className={styles.img} src={ai} width={600}/>
    </div>
		</div>
	);
};

export default Admin;