export interface LoadingProps {
  isLoading: boolean
  children: React.ReactNode
}

// Sempre o componente que vai na função de HOC
// é quem irá receber as propriedades do HOC e
// também as suas próprias propriedades

const Loading = ({ isLoading, children }: LoadingProps) => {
  return <div>{isLoading ? 'Loading...' : children}</div>
}

export default Loading
