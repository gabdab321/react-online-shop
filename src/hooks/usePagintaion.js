import {useMemo} from "react";

export const usePagination = (page, productsPerPage, sortedProducts) => {
    return useMemo(() => {
        return sortedProducts.slice(page * productsPerPage, (page * productsPerPage) + productsPerPage)
    }, [page, sortedProducts])
}