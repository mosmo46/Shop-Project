import React,{ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";

import "./HomeScreen.css";

//Components
import Product from "../../components/Product/Product";

//Actions

import { getProducts as listProducts } from "../../redux/actions/productActions";
const override = `css
  display: block;
  margin: 0 auto;
  border-color: red;
`;


export default function HomeScreen() {

  const texts = ['Welcome','To','Sally T-shirt' ];
  
  let count = 0;
  let index= 0;
  let currentText ='';
  let letter='';

  
  
  
  (function type() {
      if(count ===texts.length){
          count =0;
      }
      currentText=texts[count];
      letter=currentText.slice(0,++index);
      
  
      document.getElementsByName('h2').textContent =letter;
      if(letter.length === currentText.length){   
          count++;
          index = 0;
      }
      setTimeout(type,400)
  
  }())
  


  
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">{texts}</h2>

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
