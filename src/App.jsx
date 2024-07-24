import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Los mejores productos a un click de distancia." />
    </>
  )
}

export default App
