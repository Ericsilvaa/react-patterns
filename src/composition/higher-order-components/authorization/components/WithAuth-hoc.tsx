//  quem passa a propriedade isLogin para o componente

import React from 'react'
import { Authorization, AuthorizationProps } from './Authorization'

/* 
diff generics:
1. Tipo Dentro do Parâmetro:
  Mais direto e simples.
Adequado se você está definindo tipos específicos para as propriedades e não precisa das funcionalidades adicionais do React.FC.

2. Tipo Fora com React.FC<>:
Oferece suporte a propriedades padrão do React, como children.
Segue uma convenção comum para componentes funcionais, o que pode facilitar a leitura e manutenção do código.

3. Tipo Fora com SomethingType<>:
Permite que você defina propriedades adicionais para o componente.
*/

// Remove a propriedade 'isLogin'
type OmitWrapperProps = Omit<AuthorizationProps, 'isLogin'>
// Tipo de componente que aceita propriedades `T` mais `AuthorizationProps`
type ComponentProps<T> = React.ComponentType<T & AuthorizationProps>
// Remove a propriedade 'isLogin' do tipo `T`
type WithoutIsLogin<T> = Omit<T, 'isLogin'>

const WithAuthorization = <T extends OmitWrapperProps>(
  Component: ComponentProps<T>
) => {
  const WrapperComponent: React.FC<WithoutIsLogin<T>> = (props) => {
    const isLogin = true
    return <Component isLogin={isLogin} {...(props as T)} />
  }

  return WrapperComponent
}

// Função que cria um HOC para adicionar funcionalidades
export const AuthorizationHOC = WithAuthorization(Authorization)
