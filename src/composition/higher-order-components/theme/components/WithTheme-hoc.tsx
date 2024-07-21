// quem passa a propriedade theme para o componente

import React from 'react'
import CardPost, {
  CardPostProps
} from '../../../compound/compound-card/CardPost'

// HOC que adiciona a propriedade themeHOC ao componente
const WithTheme = <P extends Omit<CardPostProps, 'themeHOC'>>(
  Component: React.ComponentType<P & CardPostProps>
) => {
  return (props: Omit<P, 'themeHOC'>) => {
    const defaultTheme = 'dark'
    return <Component themeHOC={defaultTheme} {...(props as P)} />
  }
}

const CardPostTheme = WithTheme(CardPost)

export { CardPostTheme, WithTheme }
