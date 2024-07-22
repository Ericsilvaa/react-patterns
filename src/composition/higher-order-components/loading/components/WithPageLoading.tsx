import React from 'react'

export interface WithContainerProps {
  isLoading: boolean
  theme: 'light' | 'dark'
}

type ComponentProps<T> = React.ComponentType<T>

export const WithPageLoading = <T extends object>(
  Component: ComponentProps<T>
) => {
  const WrapperComponent: React.FC<T & WithContainerProps> = (props) => {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: props.theme === 'light' ? '#ffffff' : '#333333',
      color: props.theme === 'light' ? '#000000' : '#ffffff'
    }

    return (
      <div style={containerStyle}>
        {props.isLoading ? (
          <div style={containerStyle}>
            <h1>Loading...</h1>
          </div>
        ) : (
          <Component {...(props as T)} />
        )}
      </div>
    )
  }

  return WrapperComponent
}

export default WithPageLoading
