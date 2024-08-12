import { ItemDetailContainer } from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer itemId={2}/>
    </>
  )
}

export default App
