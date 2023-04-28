import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import ai from '../../assets/ai.png';

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (error.response.status === 400) {
				setError("Invalid email or password. Please try again.");
			} else if (error.response.status === 500) {
				setError("Internal server error. Please try again later.");
			} else {
				setError("An error occurred. Please try again later.");
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Bienvenido</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Iniciar sesion
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Crear Cuenta</h1>
						<input
							type="email"
							placeholder="Correo"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
							title="Please enter a valid email address"
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Primer Apellido"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
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
						<button type="submit" className={styles.green_btn}>
							Registrarse
						</button>
						<Link to="/Index2">
						<button type="button" className={styles.white_btn}>
							Salir
						</button>
					</Link>
					</form>
				</div>
			</div>
			<div >
      <img className={styles.img} src={ai} width={600}/>
    </div>
		</div>
	);
};

export default Signup;
