import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../layout/Loader/Loader'
import MetaData from '../layout/MetaData'
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import ProductCard from './ProductCard';
import { clearErrors, getProduct } from '../../actions/productAction';



const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      // alert(error.message);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
<Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll 
                {/* <CgMouse /> */}
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
