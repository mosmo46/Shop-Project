import "./CartScreen.css";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RollbackOutlined} from '@ant-design/icons';

//Components
import CartItem from "../../components/CartItem/CartItem";
import {TitleAnimationCartScreen} from "../../components/Animation/TitelAnimation"
//Actions
import { addToCart,removeFromCart } from "../../redux/actions/cartActions"

export default function CartScreen() {
  
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const qtyChangeHandler=(id,qty)=>{
   dispatch(addToCart(id,qty))
  }

 const removeFromCartHandler =(id)=>{
dispatch(removeFromCart(id))
 }

// eslint-disable-next-line no-unused-vars
const getCartCount=()=>{
    return cartItems.reduce((qty,item)=>Number(item.qty) +qty + 0)
}

const getCartSubTotal =()=>{
return cartItems.reduce((price,item)=>(item.price * item.qty) + price,0)
}
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">

        <h2><TitleAnimationCartScreen/></h2>
        {cartItems.length === 0 ? (
          <div>
            Your Cart is empty <Link to="/">
              Go Back</Link>
            <RollbackOutlined />
          </div>
        ) : (
          cartItems.map((item) => <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeFromCartHandler={removeFromCartHandler} />)
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Product To Checkout</button>
        </div>
      </div>
    </div>
  );
}
