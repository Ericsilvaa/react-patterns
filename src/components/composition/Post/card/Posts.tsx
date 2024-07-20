import CardPost from './CardPost'

type PostItem = {
  id: string
  title: string
  content: string
}

function Posts() {
  const PostsData: PostItem[] = [
    {
      id: '1',
      title: 'Post 1',
      content: 'Content 1'
    },
    {
      id: '2',
      title: 'Post 2',
      content: 'Content 2'
    },
    {
      id: '3',
      title: 'Post 3',
      content: 'Content 3'
    }
  ]

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
