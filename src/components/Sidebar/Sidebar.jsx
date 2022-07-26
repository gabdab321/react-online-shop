import React, {useContext} from 'react';
import {categories} from "../../config/categories";
import cl from "./Sidebar.module.css";
import {Context} from "../../context";

const Sidebar = () => {
    const {currentCategory, setCurrentCategory} = useContext(Context)

    function setCategory(e) {
        e.preventDefault()

        if(e.target.textContent === "all") {
            setCurrentCategory("")
        }else{
            setCurrentCategory(e.target.textContent)
        }
    }

    return (
        <div className={cl.sidebar}>
            {categories.map(category =>
                <a onClick={setCategory} className={cl.sidebar__item} key={category}>{category}</a>
            )}
        </div>
    );
};

export default Sidebar;