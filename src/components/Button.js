import styles from "./Button.module.css";

const Button = ({ children, onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="whitespace-nowrap outline-none uppercase px-6 py-2 my-6
			bg-button rounded text-white tracking-wider font-bold"
		>
			{children}
		</button>
	);
};

export const SandwichButton = ({ onClick }) => {
	return (
		<button className={styles.SandwichButton} onClick={onClick} type="button">
			<div className={styles.SandwichButtonLine}></div>
			<div className={styles.SandwichButtonLine}></div>
			<div className={styles.SandwichButtonLine}></div>
		</button>
	);
};

export default Button;
