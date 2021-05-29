import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RedditOutlined} from '@ant-design/icons';

export default function Navbar({ click }) {
  const cart = useSelector((state) => state.cart);



  
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <> 
    <nav className="navbar">
      <ul className="navbar_links">
        <li>
      
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

<div className="navbar_logo">


        <h2>Sally</h2>
<RedditOutlined />
      </div>
   
   

      <div className="hamburger_menu" onClick={click}>
        
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
    </>
  );
}
