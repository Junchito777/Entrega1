import './secciones.css';

const Secciones = () => {
    return (
    <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Secciones</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">SUV</a></li>
                <li><a className="dropdown-item" href="#">Tres Volúmenes</a></li>
                <li><a className="dropdown-item" href="#">Dos Volúmenes</a></li>
                <li><a className="dropdown-item" href="#">Monovolumen</a></li>
                <li><a className="dropdown-item" href="#">Familiar</a></li>
                <li><a className="dropdown-item" href="#">Todo Terreno</a></li>
                <li><a className="dropdown-item" href="#">Pickup</a></li>
                <li><a className="dropdown-item" href="#">Coupé</a></li>
                {/* <li><hr className="dropdown-divider" /></li> */}
              </ul>
    </li>
    );
}

export default Secciones;
