import {useMemo} from "react";

export const useSortAndSearch = (sortMethod, query, products) => {
    return useMemo(() => {
        if(products.length === 0) return []

        const sortedProducts = (() => {
            switch (sortMethod) {
                case "":
                    return products
                case "priceCheap":
                    return [...products].sort((a, b) => a.price - b.price)
                case "priceExpensive":
                    return [...products].sort((a, b) => b.price - a.price)
                case "rating":
                    return [...products].sort((a, b) => b.rating - a.rating)
        }})()

        return sortedProducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
    }, [sortMethod, query, products])
}