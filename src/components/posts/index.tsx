import React from 'react'
import Post from '../post'
import './index.css'
import { useLoadPosts } from '../../hooks/useLoadPosts'

const Posts = () => {

	const [
		posts,
		loading
	] = useLoadPosts()

		return (
			<article className={'posts'}>
				<h2>Your Posts</h2>
				{ loading && <div>Loading...</div>}
				{ !posts?.length && 'There are no posts available yet' }
				{ posts.length &&
					<ul>
						{ posts.map(({ title, body}, index) => (
							<li key={`${title}-${index}`}>
								<Post
									title={title}
									body={body}
								/>
							</li>
						)) }
					</ul>
				}
			</article>
		)
}

export default Posts
