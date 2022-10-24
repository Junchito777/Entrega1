import './opciones.css';
import Secciones from '../Secciones/Secciones';
import Contacto from '../Contacto/Contacto';
import Home from '../Home/Home';
import Buscador from '../Buscador/Buscador';


const Opciones = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Home/>
        <Contacto/>
          <Secciones/>
        </ul>
        <Buscador Autos={"Buscar Autos"}/>
      </div>
    );
}

export default Opciones;
