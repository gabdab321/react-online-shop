import './styles/App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import {Context} from "./context/index";
import {useState} from "react";
import Products from "./pages/Products";

function App() {
    const [currentCategory, setCurrentCategory] = useState("")

    return (
        <Context.Provider value={{
            currentCategory,
            setCurrentCategory
        }}>

            <div className="App">
                <Navbar/>
                <Products/>
            </div>

        </Context.Provider>
    )
}

export default App;
