import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${perPage}&skip=${(currentPage - 1) * perPage}`
        );
        setProducts(response.data.products);
        const totalProducts = response.data.total;
        const totalPages = Math.ceil(totalProducts / perPage);
        setTotalPages(totalPages);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, [currentPage, perPage]);

  const handlePerPageChange = (event) => {
    setPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  if (error) {
    return <div className="containerr error">Error: {error}</div>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div className="containerr">No products found.</div>;
  }

  return (
    <div className="containerr">
      <h2 className='head'>Product List</h2>

      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/PaginationCounter/product/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <p className='titlee'>{product.title}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <label className='lab'>
        Products Per Page:
        <select value={perPage} onChange={handlePerPageChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </label>

    </div>

    

    
  );
};

export default ProductList;