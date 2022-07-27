import React from 'react';
import ProductItem from "../ProductItem/ProductItem";
import cl from "./ProductList.module.css"
import Filter from "../Filter/Filter";

const ProductList = ({products}) => {

    return (
        <div className={cl.list}>
            <Filter />

            {products.length === 0
                ?
                <h1 style={{textAlign: "center", color: "#ffffff"}}>Looks like there are nothing in this category yet :(</h1>
                :
                products.map(product =>
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                )
            }
        </div>
    );
};

export default ProductList;