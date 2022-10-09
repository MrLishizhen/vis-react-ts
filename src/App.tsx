import './App.css'
import {useRoutes} from "react-router-dom";
import routers from "./router";

function App() {
    const element = useRoutes(routers);
    return (
        <div className="App">
            {
                element
            }
        </div>
    )
}

export default App
