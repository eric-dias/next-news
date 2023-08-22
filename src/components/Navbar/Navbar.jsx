import styles from "./Navbar.module.css"

import Link from "next/link"

const Navbar = () => {
	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				<Link href="/" className={styles.item}>
					Home
				</Link>

				<Link href="/feed" className={styles.item}>
					Feed
				</Link>

				<Link href="/eom" className={styles.item}>
					EOM
				</Link>
			</ul>
		</div>
	)
}

export default Navbar
