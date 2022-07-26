import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import "../styles/ProductPage.css"
import {useFetching} from "../hooks/useFetching";
import {ProductService} from "../API/ProductService";
import Loader from "../components/UI/Loader/Loader";
import Slider from "../components/UI/Slider";

const ProductPage = () => {
    const productId = useParams()

    const [product, setProduct] = useState({})

    const [fetchProduct, isProductLoading, errorProduct] = useFetching(async () => {
        const response = await ProductService.getById(productId.id)
        setProduct(response)
    })

    console.log(product)

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        isProductLoading
            ?
            <Loader styles={{marginTop:"250px"}}/>
            :
            <div className="ProductPage">
                <Slider images={product.images}/>
            </div>
    );
};

export default ProductPage;