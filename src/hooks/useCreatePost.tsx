import { PostModel } from '../models/post'
import { PostsService } from '../services/posts-service'

export const useCreatePost = (userId: number = 1) => {

	const createNewPost = async (post: PostModel) => {
		return new PostsService().createNewPost(post, userId)
	}

	return [
		createNewPost,
	]

}
