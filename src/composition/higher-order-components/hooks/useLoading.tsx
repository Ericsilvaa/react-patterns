import React from 'react'

const useLoading = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  // Simulação de carregamento
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading((prevIsLoading) => !prevIsLoading)
    }, 5000) // Alterna o estado a cada 1000 milissegundos (1 segundo)
  }, [])

  // // Alternar tema para simulação
  React.useEffect(() => {
    const themeToggle = setInterval(() => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }, 5000) // Alterna o tema a cada 5 segundos
    return () => clearInterval(themeToggle)
  }, [])

  return { isLoading, theme }
}

export default useLoading
