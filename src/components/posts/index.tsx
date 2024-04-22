import React, { useState } from 'react'
import Post from '../post'
import { PostModel } from '../models/post'
import './index.css'

export type PostsStateTypes = {
	posts: PostModel[],
}

const initialState = {
	posts: [
		{
			title: 'This is post header',
			body: 'This is post body'
		}]
}

const Posts = () => {

	const [state, setState] = useState<PostsStateTypes | null>(initialState)

		return (
			<article className={'posts'}>
				<h2>Your Posts</h2>
				{ !state?.posts?.length && 'There are no posts available yet' }
				{ !!state?.posts?.length &&
					<ul>
						{ state.posts.map(({ title, body}, index) => (
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
