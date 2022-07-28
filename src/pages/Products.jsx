 import React, {useContext, useEffect, useMemo, useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import ProductList from "../components/ProductList/ProductList";
import {useFetching} from "../hooks/useFetching";
import {ProductService} from "../API/ProductService";
import Loader from "../components/UI/Loader/Loader";
import {Context} from "../context";
import {useSortAndSearch} from "../hooks/useSort";
import ReactPaginate from "react-paginate";
import {usePagination} from "../hooks/usePagintaion";
import "../styles/Pagination.css"

const Products = () => {
    const {searchQuery} = useContext(Context)
    const {sortMethod} = useContext(Context)
    const {currentCategory} = useContext(Context)
    const [products, setProducts] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const productsPerPage = 6

    const pages = useMemo(() => {
        return Math.ceil(totalCount / productsPerPage)
    }, [totalCount])

    const sortedProducts = useSortAndSearch(sortMethod, searchQuery, products)
    const paginatedProducts = usePagination(currentPage, productsPerPage, sortedProducts)

    const [fetchProducts, isProductsLoading, errorProducts] = useFetching(async () => {
        if(currentCategory === "") {
            const response = await ProductService.getAll()
            setTotalCount(response.total)
            setProducts(response.products)
        }else{
            const response = await ProductService.getByCategory(currentCategory)
            setTotalCount(response.total)
            setProducts(response.products)
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
                <>
                    <ProductList products={paginatedProducts}/>
                    <ReactPaginate
                        pageCount={pages}
                        breakLabel="..."
                        nextLabel=">"
                        previousLabel="<"
                        onPageChange={e => setCurrentPage(e.selected)}
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageClassName="pagination__item"
                        activeClassName="pagination__active"
                        pageRangeDisplayed={1}
                        nextClassName="pagination__controls"
                        previousClassName="pagination__controls"
                        nextLinkClassName="pagination__controls__link"
                        previousLinkClassName="pagination__controls__link"
                        breakClassName="pagination__break"
                    />
                </>
            }

            <button onClick={() => window.scrollTo(0, 0)} className="upButton">{"<"}</button>
        </div>
    );
};

export default Products;