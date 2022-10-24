import './cartwidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
    <div className='carrito'>
        <li className="nav-item">
            <button><FontAwesomeIcon icon={faCartShopping} /></button>       
        </li>        
    </div>
    );
}

export default CartWidget;
