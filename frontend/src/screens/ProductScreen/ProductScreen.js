import "./ProductScreen.css";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";

//Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

export default function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler =()=>{

    dispatch(addToCart(product._id , qty));
    history.push('/cart')
  }


  return (
    <div className="productscreen">
      {loading ? (
        <ScaleLoader/> 
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>

            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>

          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "in stock" : "out of stock"}
                </span>
              </p>
              <p>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
      ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>Add To Cart</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
