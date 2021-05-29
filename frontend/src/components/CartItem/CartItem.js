import './CartItem.css'
import {Link, BrowserRouter as Router} from 'react-router-dom';


export default function CartItem(props) {
    const {item,qtyChangeHandler,removeFromCartHandler}=props;
    
    return (
<div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl}
 alt={item.name}/>
            </div>

<Router>
<Link to={`/products${item.product}`} className="cartitem__name">
    <p>{item.name}</p>
</Link>
</Router>
<p className="cartitem__price">${item.price}</p>

<select className="cartitem__select" value={item.qty} onChange={(e)=>qtyChangeHandler(item.product ,e.target.value)}> 
{[...Array(item.countInStock).keys()].map(x=>(
    <option key={x+1} value={x+1}>{x+1}</option>
))}
</select>

<button className="cartitem__deleteBtn" onClick={()=>removeFromCartHandler(item.product)}>
    <i className="fas fa-trash"></i>
</button>
        </div>
    )
    
}
