import React from 'react'

// Define o tipo Props para o WrapperComponent
type Props = {
  Component: React.ComponentType<MoreProps> // Define o tipo de componente que espera MoreProps
}

// Define o tipo MoreProps para as propriedades adicionais
interface MoreProps {
  someProp: string
}

// Define o WrapperComponent que aceita um componente e o renderiza com propriedades adicionais
const WrapperComponent: React.FC<Props> = ({ Component }) => {
  // Define as propriedades adicionais
  const moreProps: MoreProps = {
    someProp: 'some value'
  }

  // Define o HOC, que é um componente funcional
  const HoeComponent: React.FC<MoreProps> = (props) => (
    <Component {...props} {...moreProps} />
  )

  // Renderiza o HOC com as propriedades adicionais
  return <HoeComponent someProp={moreProps.someProp} />
}

export default WrapperComponent
