import './styles/App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import {Context} from "./context/index";
import React, {useState} from "react";
import Products from "./pages/Products";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [currentCategory, setCurrentCategory] = useState("")
    const [sortMethod, setSortMethod] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <Context.Provider value={{
            currentCategory,
            setCurrentCategory,
            sortMethod,
            setSortMethod,
            searchQuery,
            setSearchQuery
        }}>
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </Context.Provider>
    )
}

export default App;
