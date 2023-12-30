import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ match }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchProduct();
  }, [id]);
  

  if (error) {
    return <div className="container error">Error: {error}</div>;
  }

  if (!product) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="containers product-details-container">
      <div className="product-details">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <div className="product-info">
          <div className="product-title">{product.title}</div>
          <div className="product-description">{product.description}</div>
        </div>
      </div>

      <div className="back-to-list">
        <Link to="/product">Back to Product List</Link>
      </div>
    </div>
  );
};

export default ProductDetails;