import React, {useState} from 'react';
import cl from "./Sidebar.module.css";

const Sidebar = () => {
    const [categories, setCategories] = useState([])

    return (
        <div className={cl.sidebar}>

        </div>
    );
};

export default Sidebar;