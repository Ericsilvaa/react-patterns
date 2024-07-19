import React from 'react'

const BadComponet = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <div className='content'>
        <h1>Content Title</h1>
        {/** more content */}
      </div>
    </>
  )
}

export default BadComponet
