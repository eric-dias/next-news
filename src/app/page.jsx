import styles from "./page.module.css"

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1>Next.js News App</h1>
			</div>

			<div className={styles.content}>
				<p>Notícias de primeira hora para você</p>
			</div>
		</div>
	)
}
