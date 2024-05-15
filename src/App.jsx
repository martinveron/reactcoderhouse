import { ItemListContainer } from "./components/ItemListContainer"
import { Navbar } from "./components/Navbar"
import "../css/main.css"

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Proximamente: Lista de items (y un titulo más original)"/>
    </>
  )
}

export default App
