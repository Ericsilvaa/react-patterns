export interface AuthorizationProps {
  isLogin: boolean
}

const Unauthorized = () => {
  return (
    <div>
      <h1>Usuário não autorizado</h1>
    </div>
  )
}

const Authorization = ({ isLogin, ...props }: AuthorizationProps) => {
  console.log('🚀 ~ Authorization ~ isLogin:', isLogin)
  if (!isLogin) return <Unauthorized />

  return (
    <div {...props}>
      <h1>Authorization Component</h1>
    </div>
  )
}

export { Authorization }
