import {PostModel} from '../models/post'

export const useCreatePost = (userId: number = 1) => {

	const createNewPost = async (post: PostModel) => {
		return await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				...post,
				userId,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => json);
	}

	return [
		createNewPost,
	]

}
