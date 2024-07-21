import { PostLayout } from './PostLayout'

const Post = () => {
  return (
    <PostLayout>
      <div className='content'>
        <h1>Content Post Title</h1>
        {/** more content */}
      </div>
    </PostLayout>
  )
}

export { Post }
