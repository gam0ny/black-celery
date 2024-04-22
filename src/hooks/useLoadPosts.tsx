import {useEffect, useState} from 'react'
import {PostModel} from '../models/post'

export type LoadPostsStateTypes = {
	posts: PostModel[],
	loading: Boolean,
}


const initialState = {
	posts: [],
	loading: false,
}

export const useLoadPosts = (): [PostModel[], Boolean] => {
	const [state, setState] = useState<LoadPostsStateTypes>(initialState)

	useEffect(() => {

		setState(prevState => ({
			...prevState,
			loading: true,
		}))


		fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
			.then(response => response.json())
			.then(json => {
				const posts = json.map((item: any) => ({
					title: item.title,
					body: item.body,
				}))

				setState(prevState => ({
					...prevState,
					posts,
					loading: false,
				}))

			})

	}, [])

	return [
		state.posts,
		state.loading,
	]
}
