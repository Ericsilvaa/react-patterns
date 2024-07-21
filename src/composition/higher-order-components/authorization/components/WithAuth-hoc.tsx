//  quem passa a propriedade isLogin para o componente

import React from 'react'
import { Authorization, AuthorizationProps } from './Authorization'

const WithAuthorization = <T extends Omit<AuthorizationProps, 'isLogin'>>(
  Component: React.ComponentType<T & AuthorizationProps>
) => {
  return (props: Omit<T, 'isLogin'>) => {
    const isLogin = true
    return <Component isLogin={isLogin} {...(props as T)} />
  }
}

// Função que cria um HOC para adicionar funcionalidades
export const AuthorizationHOC = WithAuthorization(Authorization)
