import React from 'react'
import {Link} from 'react-router-dom'; 

const Product = ({product,col}) => {
  return (
    <div key={product._id} className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
    <div className="card p-3 rounded">
      <img
        className="card-img-top mx-auto"
        src={product.images[0]}
        // src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <a href={`/product/${product._id}`}>{product.name}</a>
        </h5>
        <div className="ratings mt-auto">
          <div className="rating-outer">
            <div className="rating-inner" style={{width:`${(product.ratings/5)*100}`}}></div>
          </div>
          <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
        </div>
        <p className="card-text">{product.price}</p>
        <a href={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</a>
      </div>
    </div>
  </div>
  )
}

export default Product