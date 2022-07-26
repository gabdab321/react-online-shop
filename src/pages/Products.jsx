import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import ProductList from "../components/ProductList/ProductList";
import {useFetching} from "../hooks/useFetching";
import {ProductService} from "../API/ProductService";
import Loader from "../components/UI/Loader/Loader";

const Products = () => {
    const [products, setProducts] = useState([])

    const [fetchProducts, isProductsLoading, errorProducts] = useFetching(async () => {
        let response = await ProductService.getAll()
        setProducts(response)
    })

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="Products">
            <Sidebar/>

            {isProductsLoading
            ?
                <Loader styles={{margin: "0 auto"}}/>
                :
                <ProductList products={products}/>
            }
        </div>
    );
};

export default Products;