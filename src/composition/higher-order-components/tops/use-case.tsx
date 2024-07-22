import Loading from './components/Loading'
import WithLoading from './components/WithLoading'

const LoadingHOC = WithLoading(Loading)

const UseCaseLoading = () => {
  return (
    <div>
      <LoadingHOC />
    </div>
  )
}

export default UseCaseLoading
