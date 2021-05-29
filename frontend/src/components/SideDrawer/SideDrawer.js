import './SideDrawer.css'
import { Link} from 'react-router-dom';
import { useSelector} from "react-redux";
export default function SideDrawer({show,click}) {
    const sideDrawerClass =["sideDrawer"]

    if(show){
        sideDrawerClass.push("show")
    }
    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };

    return <div className={sideDrawerClass.join(" ")}>


<ul className="sidedrawer_links" onClick={click}>
<li>
    <Link to="/cart">
    <i className="fas fa-shopping-cart"></i>

        <span>
        Crat <span className="sidedrawer_cartbadge">{getCartCount()}</span>
        </span>
        
    </Link>
</li>
<li>
    <Link to="/">
Shop
    </Link>
</li>
</ul>


    </div>
    
}
