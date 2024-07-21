import { PostsData } from '../shared/Post'
import CardPost from './CardPost'

function Posts() {
  return (
    <div className='postas'>
      {PostsData.map((post) => {
        return (
          <CardPost key={post.id}>
            <CardPost.Content>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </CardPost.Content>
            <CardPost.Action>
              <div className='post-title'>{post.title}</div>
              <div className='post-content'>{post.content}</div>
            </CardPost.Action>
          </CardPost>
        )
      })}
    </div>
  )
}

export default Posts
