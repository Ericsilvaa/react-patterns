export interface LoadingProps {
  isLoading: boolean
}

// Sempre o componente que vai na função de HOC
// é quem irá receber as propriedades do HOC e
// também as suas próprias propriedades

const Loading = ({ isLoading }: LoadingProps) => {
  return <div>{isLoading ? 'Loading...' : 'Loaded'}</div>
}

export default Loading
