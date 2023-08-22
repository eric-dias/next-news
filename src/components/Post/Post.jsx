import Link from "next/link"
import styles from "./Post.module.css"

const Post = ({ post }) => {
	return (
		<div className={styles.container}>
			<Link href={post.url} className={styles.link} target="_blank">
				<h1 className={styles.title}>{post.title}</h1>
			</Link>
			<p className={styles.description}>{post.description}</p>
			<img
				src={post.urlToImage}
				alt={post.title}
				className={styles.image}
			/>
		</div>
	)
}

export default Post
