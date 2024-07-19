function Header({ children }: { children: React.ReactNode }) {
  return (
    <header>
      <h2>Header</h2>
      {children}
    </header>
  )
}

export { Header }
