import React from 'react';
import { PostModel } from '../models/post'
import './index.css';

export type PostPropTypes = PostModel & {
}

const Post = ({ title, body } : PostPropTypes) =>
	<article className='post'>
		<h3>{title}</h3>
		<p>{body}</p>
	</article>

export default Post
