import {PostModel} from '../models/post'

export interface IPostsService {
	loadPosts: Function,
	createNewPost: Function,
}

export class PostsService implements IPostsService {

	protected endpoint: string
	protected headers: HeadersInit

	constructor() {
		this.endpoint = 'https://jsonplaceholder.typicode.com/posts'
		this.headers = {
			'Content-type': 'application/json; charset=UTF-8',
		}
	}

	async createNewPost(post: PostModel, userId: number) {
		return fetch(this.endpoint, {
			method: 'POST',
			body: JSON.stringify({
				...post,
				userId,
			}),
			headers: this.headers,
		})
			.then((response) => response.json())
			.then((json) => json);
	}

	async loadPosts(userId: number) {
		return fetch(`${this.endpoint}?userId=${userId}`)
			.then(response => response.json())
			.then(json => {
				return json.map((item: any) => ({
					title: item.title,
					body: item.body,
				}))
			})
	}

}
