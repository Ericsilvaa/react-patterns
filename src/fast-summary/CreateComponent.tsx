import React, { useEffect, useState } from 'react'

type Props = {
  title: string
  onClick: () => void
}

/* 
  1. Componentes são funções que retornam elementos JSX.
  2. Podem receber propriedades como argumentos.
  3. Tudo que tiver pós a primeira abertura de chaves é onde realizamos a lógica do componente, ou seja, onde executamos o código JavaScript. 
    O Ponto 3 Compoem:
      3.1. Estado interno do componente.
      3.2. Efeitos colaterais.
      3.3. Manipuladores de eventos.
        3.3.1. Funções que alteram o estado do componente.
        3.3.2. Funções que recebem um Comonent.
  4. O retorno do componente é o que será renderizado na tela.
    Retorno do componente se da por:
      4.1. Tudo que está dentro do parentese do return.
      4.2 Tudo que esta dentro do return é considerando filho do componente maior. 
  5. O componente é exportado para ser utilizado em outros componentes.
*/

/*
  const CreateComponent = (qualquer coisa) => {}
  1. Componente definido como uma função
  2. Componente recebe um argumento qualquer como parâmetro.
*/
const CreateComponent = ({ title, onClick }: Props) => {
  //  Inicio do Ponto 3
  // 3.1. Estado interno do componente
  const [count, setCount] = useState(0)

  // 3.2. Efeito colateral para atualizar o título do documento
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`
  }, [count])

  // 3.3. Manipulador de evento para incrementar o contador
  const handleClick = () => {
    setCount(count + 1)
    onClick()
  }

  // Fim do Ponto 3 e inicio do Ponto 4
  // Renderização do componente
  return (
    <div>
      <h1>{title}</h1>
      <p>Contador: {count}</p>
      <button onClick={handleClick}>Clique em mim</button>
    </div>
  )
}

export default CreateComponent
