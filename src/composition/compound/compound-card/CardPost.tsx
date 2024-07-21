import { PropsWithChildren } from 'react'

export interface CardPostProps extends PropsWithChildren {
  themeHOC: string
}

export default function CardPost({
  children,
  themeHOC,
  ...props
}: CardPostProps) {
  const theme =
    themeHOC === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'

  return (
    <div className={`container ${theme}`} {...props}>
      {children}
    </div>
  )
}

CardPost.Content = function CardPostContent({ children }: PropsWithChildren) {
  return <div className='content'>{children}</div>
}

CardPost.Action = function CardPostAction({ children }: PropsWithChildren) {
  return (
    <div className='action'>
      <div className='action-plan'>{children}</div>
    </div>
  )
}
