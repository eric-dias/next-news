import styles from "./page.module.css"

async function getData() {
	const res = await fetch(
		"https://my-json-server.typicode.com/eric-dias/next-news/eom"
	)

	return res.json()
}

export default async function EOM() {
	const data = await getData()
	//console.log(data)

	return (
		<div className={styles.container}>
			<h1>Employee Of The Month</h1>

			<h2 className={styles.name}></h2>
			<p className={styles.subtext}></p>
			<img src="" alt="" className={styles.image} />

			<p className={styles.text}></p>
		</div>
	)
}
