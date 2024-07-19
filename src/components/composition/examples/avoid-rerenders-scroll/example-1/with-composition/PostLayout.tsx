import React from 'react'

type Props = {
  children: React.ReactNode
}

export function PostLayout({ children }: Props) {
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    const scrollListener = () => {
      // update the progress based on the scroll position
      setProgress(
        (100 * window.scrollY) /
          (document.body.scrollHeight - window.innerHeight)
      )
    }
    window.addEventListener('scroll', scrollListener, false)
  }, [])

  return (
    <>
      <h2 className='progress'>Progress: {progress}%</h2>
      {children}
    </>
  )
}
