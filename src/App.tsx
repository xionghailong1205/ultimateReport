import Header from './View/Header/Header'
import Content from './View/Content/Content'

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      <Header />
      <Content />
    </div>
  )
}

export default App
