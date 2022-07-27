 import React, {useContext, useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import ProductList from "../components/ProductList/ProductList";
import {useFetching} from "../hooks/useFetching";
import {ProductService} from "../API/ProductService";
import Loader from "../components/UI/Loader/Loader";
import {Context} from "../context";
 import {useSortAndSearch} from "../hooks/useSort";

const Products = () => {
    const {searchQuery} = useContext(Context)
    const {sortMethod} = useContext(Context)
    const {currentCategory} = useContext(Context)
    const [products, setProducts] = useState([])

    const sortedProducts = useSortAndSearch(sortMethod, searchQuery, products)

    const [fetchProducts, isProductsLoading, errorProducts] = useFetching(async () => {
        if(currentCategory === "") {
            const response = await ProductService.getAll()
            setProducts(response)
        }else{
            const response = await ProductService.getByCategory(currentCategory)
            setProducts(response)
        }
    })

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [currentCategory, searchQuery])

    return (
        <div className="Products">
            <Sidebar/>
            {errorProducts &&
                <h1>error occurred: {errorProducts}</h1>
            }

            {isProductsLoading
            ?
                <Loader styles={{margin: "0 auto"}}/>
                :
                <ProductList products={sortedProducts}/>
            }
        </div>
    );
};

export default Products;