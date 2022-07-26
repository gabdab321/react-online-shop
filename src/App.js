import './styles/App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import {Context} from "./context/index";
import React, {useState} from "react";
import Products from "./pages/Products";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    const [currentCategory, setCurrentCategory] = useState("")

    return (
        <Context.Provider value={{
            currentCategory,
            setCurrentCategory
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
