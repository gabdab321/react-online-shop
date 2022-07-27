import React, {useContext, useState} from 'react';
import Select from "../UI/select/Select";
import {options} from "../../config/options";
import {Context} from "../../context";
import cl from "./Filter.module.css"

const Filter = () => {
    const {sortMethod, setSortMethod} = useContext(Context)
    const {setSearchQuery} = useContext(Context)

    const [inputValue, setInputValue] = useState("")

    function handleClick() {
        setSearchQuery(inputValue)
        setInputValue("")
    }

    return (
        <div className={cl.filter}>
            <Select
                className={cl.select}
                defaultValue="Sort by"
                options={options}
                value={sortMethod}
                onChange={e => setSortMethod(e.target.value)}
            />

            <div className={cl.input__wrapper}>
                <input value={inputValue} onChange={e => setInputValue(e.target.value)} className={cl.search} type="text" placeholder="search..."/>
                <button onClick={handleClick} className={cl.submit}>Search</button>
            </div>
        </div>
    );
};

export default Filter;