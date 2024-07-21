import React from 'react'
/* 
  Entendendo Composition

  *Combina [componentes menores] para criar [componentes maiores] e mais complexos.
	
	componentes menores?
    Children => 
    Elements => 
    Modules => 
	
  componentes maiores?
    Parents => 
    Containers => 
    Layouts => 
    Pages => 
  
  Todo componente que envolve outro componente 
    HOC => 
    Render Props =>
    Hooks =>
    Context API =>
    Compound Components =>
  é um componente maior.
*/

export const Header = () => {
  return (
    <div>
      <h2>H</h2>
      <div>Some content</div>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      <h2>H</h2>
      <div>Some content</div>
    </div>
  )
}
const SideBar = () => {
  return (
    <div>
      <h2>H</h2>
      <div>Some content</div>
    </div>
  )
}
const Content = () => {
  return (
    <div>
      <h2>H</h2>
      <div>Some content</div>
    </div>
  )
}

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <SideBar />
      <div>Some content</div>
    </div>
  )
}
