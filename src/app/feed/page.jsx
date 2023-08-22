import Post from "@/components/Post/Post"

async function getData() {
	const res = await fetch(
		"https://newsapi.org/v2/top-headlines?country=us&apiKey=f6096fdccd3148d4966c68138779425c"
	)

	return res.json()
}

export default async function Feed() {
	const data = await getData()
	//console.log(data)

	return <div>
        {data.articles.map((news) => (
            <Post post={news}/>
        ))}
    </div>
}
