import React from 'react';
import cl from "./ProductItem.module.css"
import {countDiscount} from "../../utils/countDiscount";
import {useNavigate} from "react-router-dom";

const ProductItem = ({product}) => {

    const navigate = useNavigate()

    return (
        <div className={cl.product}>
            <img className={cl.thumbnail} src={product.thumbnail} alt={product.title}/>
            <p className={cl.title} onClick={() => navigate(`/products/${product.id}`)}>{product.title}</p>
            <div className={cl.rating}><img src="https://img.icons8.com/fluency/48/000000/star.png"/> {product.rating}</div>
            <div className={cl.price}>
                <p className={cl.oldPrice}>{product.price}€</p>
                <br/>
                <p className={cl.newPrice}>{countDiscount(product.price, product.discountPercentage)}€</p></div>
        </div>
    );
};

export default ProductItem;