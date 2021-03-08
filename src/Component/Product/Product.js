import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props)
    const {name,price,img,seller,stock,key} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
            <h4 id="pd-name"><Link to={"/product/"+key}>{name}</Link></h4>
            <br/>
            <p className="product-name"><small> by:{seller}</small></p>
            <p className="product-name">$ {price}</p>
            { props.showAddToCart && <button className="main-button" onClick= {() =>props.handleAddProduct(props.product)} >  <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>}
            <br/>
            <p className="product-name"> <small>only {stock} available</small> </p>
            </div>
            
        </div>
    );
};

export default Product;