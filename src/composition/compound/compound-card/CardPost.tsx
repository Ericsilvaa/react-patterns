import { PropsWithChildren } from 'react'

export default function CardPost({ children, ...props }: PropsWithChildren) {
  return (
    <div className='container' {...props}>
      {children}
    </div>
  )
}

CardPost.Content = function CardPostContent({ children }: PropsWithChildren) {
  return <>{children}</>
}

CardPost.Action = function CardPostAction({ children }: PropsWithChildren) {
  return (
    <div className='action'>
      <div className='action-plan'>{children}</div>
    </div>
  )
}
