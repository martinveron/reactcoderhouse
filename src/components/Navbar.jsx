import { CardWidget } from "./CardWidget"

export const Navbar = () => {
  return (
    <header className="header">
      <h1>PC Gaming Store</h1>
      <nav>
      <ul className="nav-menu">
        <li><a className="nav-link" href="#">Placas de Video</a></li>
        <li><a className="nav-link" href="#">Procesadores</a></li>
        <li><a className="nav-link" href="#">Monitores</a></li>
        <li><a className="nav-link" href="#">Memorias</a></li>
        <li><a className="nav-link" href="#">Discos</a></li>
        <li><a className="nav-link" href="#">Perifericos</a></li>
      </ul>
      </nav>
      <CardWidget/>
    </header>
  )
}
