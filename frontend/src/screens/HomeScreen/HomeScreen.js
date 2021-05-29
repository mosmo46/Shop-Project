import React,{ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";

import "./HomeScreen.css";

//Components
import Product from "../../components/Product/Product";
import {TitleAnimationHomeScreen} from "../../components/Animation/TitelAnimation"
//Actions

import { getProducts as listProducts } from "../../redux/actions/productActions";

// eslint-disable-next-line no-unused-vars
const override = `css
  display: block;
  margin: 0 auto;
  border-color: red;
`;


export default function HomeScreen() {



  
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">
        <TitleAnimationHomeScreen/>
      </h2>

      <div className="homescreen__products">
        {loading ? <ScaleLoader/> : error ? <h2>{error}</h2> : products.map(product =>(
<Product key={product._id}
productId={product._id}
name={product.name}
price={product.price}
description={product.description}
 imageUrl={product.imageUrl}  />

        ))} 
      </div>
    </div>
  );
}
