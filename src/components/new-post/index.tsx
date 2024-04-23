import React, { useRef } from 'react'
import './index.css'

export type NewPostPropTypes = {
	onSubmit?: React.FormEventHandler<HTMLFormElement>,
}

const NewPost = ({ onSubmit }: NewPostPropTypes) => {

	const titleRef = useRef<HTMLInputElement>(null)
	const bodyRef = useRef<HTMLTextAreaElement>(null)

	return (
		<article className={'new-post'}>
			<h2>Write New Post</h2>
			<form method={'POST'} onSubmit={onSubmit}>
				<div>
					<label htmlFor="post-title">Title:</label>
					<input
						type="text"
						id="post-title"
						name="post-title"
						ref={titleRef}
					/>
				</div>
				<div>
					<label htmlFor="post-body">Text:</label>
					<textarea
						id="post-body"
						name="post-body"
						ref={bodyRef}
					/>
				</div>
				<div>
					<button type={'submit'}>Post It!</button>
				</div>
			</form>
		</article>
	)
}

export default NewPost
