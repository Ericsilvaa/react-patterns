import { LoadingHoc } from './components/WithLoading'
import WithPageLoading, {
  WithContainerProps
} from './components/WithPageLoading'

const UseCaseLoading = () => {
  return (
    <div>
      <LoadingHoc>
        <h1>Minha Página</h1>
      </LoadingHoc>
    </div>
  )
}

const UseCasePageComponen: React.FC<WithContainerProps> = () => {
  return (
    <div>
      <h1>Minha Página</h1>
      <p>Conteúdo da página.</p>
    </div>
  )
}

const PageWithContainerLoading = WithPageLoading(UseCasePageComponen)

export { PageWithContainerLoading, UseCaseLoading }
