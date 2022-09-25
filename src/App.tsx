import './App.css'
import routers from "./router";
import {RouterProvider} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <RouterProvider router={routers} />
        </div>
    )
}

export default App
