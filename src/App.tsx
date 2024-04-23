import React, { FormEvent } from 'react'
import './App.css';
import Header from './components/header'
import Posts from './components/posts'
import NewPost from './components/new-post'
import { PostModel } from './models/post'
import { useCreatePost } from './hooks/useCreatePost'
import {useLoadPosts} from './hooks/useLoadPosts'

const userId = 1

function App() {

  const [createNewPost] = useCreatePost(userId)

  const [
    posts,
    loading,
    ,
    setPosts
  ] = useLoadPosts()

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const title = data.get('post-title')
    const body = data.get('post-body')

    const post: PostModel = {
      title: title?.toString() || '',
      body: body?.toString() || ''
    }

    const newPost = await createNewPost(post)

    //setLoading(true)
    setPosts((prevPosts) => {
      return [
        ...prevPosts,
        newPost,
      ]
    })
  }


  return (
    <div className="App">
      <Header />
      <NewPost onSubmit={handleFormSubmit} />
      <Posts posts={posts} loading={loading} />
    </div>
  );
}

export default App;
