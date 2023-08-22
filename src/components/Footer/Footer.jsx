import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles.container}>
			<p className={styles.name}>
				<span className={styles.span}>@</span>Éric Dias
			</p>
		</footer>
	)
}

export default Footer
