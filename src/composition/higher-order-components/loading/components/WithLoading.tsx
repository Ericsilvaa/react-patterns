import React, { useEffect } from 'react'
import Loading, { LoadingProps } from './Loading'

// Remove a propriedade 'isLogin'
type OmitWrapperProps = Omit<LoadingProps, 'isLogin'>
// Tipo de componente que aceita propriedades `T` mais `LoadingProps`
type ComponentProps<T> = React.ComponentType<T & LoadingProps>
// Remove a propriedade 'isLogin' do tipo `T`
type WithoutIsLoading<T> = Omit<T, 'isLoading'>

const WithLoading = <T extends OmitWrapperProps>(
  Component: ComponentProps<T>
) => {
  const WrapperComponent: React.FC<WithoutIsLoading<T>> = (props) => {
    const [isLoading, setIsLoading] = React.useState(false)

    useEffect(() => {
      // Define o intervalo de tempo em milissegundos
      const interval = setInterval(() => {
        setIsLoading((prevIsLoading) => !prevIsLoading)
      }, 1000) // Alterna o estado a cada 1000 milissegundos (1 segundo)

      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(interval)
    }, [])

    return <Component {...{ isLoading }} {...(props as T)} />
  }

  return WrapperComponent
}

export const LoadingHoc = WithLoading(Loading)
