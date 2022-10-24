import './ventadeAutos.css'
import Boton from '../Boton/Boton';
import Titulo from '../Titulo/Titulo';
import Opciones from '../Opciones/Opciones';
import CartWidget from '../CartWidget/CartWidget';


const VentadeAutos = () =>{
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Titulo/>
        <Boton/>
      <Opciones/>
      <CartWidget/>
      </div>
    </nav>
    </>
    )
}

export default VentadeAutos;