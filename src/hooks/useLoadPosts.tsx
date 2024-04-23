import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import { PostModel } from '../models/post'
import { PostsService } from '../services/posts-service'

export const useLoadPosts = (userId: number = 1):
	[
		PostModel[],
		Boolean,
		Dispatch<SetStateAction<Boolean>>,
		Dispatch<SetStateAction<PostModel[]>>,
	] => {
	const [posts, setPosts] = useState<PostModel[]>([])
	const [loading, setLoading] = useState<Boolean>(false)

	useEffect(() => {

		setLoading(() => true)

	}, [])

	useEffect(() => {

		if(loading) {
			 new PostsService().loadPosts(userId)
				 .then((posts) => {
					 setPosts(posts)
					 setLoading(false)
				 })
		}

	}, [loading])

	return [
		posts,
		loading,
		setLoading,
		setPosts,
	]
}
