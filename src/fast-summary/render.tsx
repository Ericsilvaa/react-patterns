import React from 'react'

type Props = {
  onRender: () => React.JSX.Element
}

export const Child = ({ onRender }: Props) => {
  return (
    <div>
      <h3>Child Component</h3>
      <div>{onRender()}</div>
    </div>
  )
}

export const ParentHome = () => {
  const onRender = () => {
    return (
      <div>
        <h2>Some thing</h2>
        <div>Some content</div>
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome to the home page</h1>
      <Child {...{ onRender }} />
    </div>
  )
}

export const ParentAbout = () => {
  const onRender = () => {
    return (
      <div>
        <h2>Another Something</h2>
        <div>Another content</div>
      </div>
    )
  }

  return (
    <div>
      <h1>About us</h1>
      <Child {...{ onRender }} />
    </div>
  )
}
