import './styles/App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Sidebar/>
        </div>
    )
}

export default App;
