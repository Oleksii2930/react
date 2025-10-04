import {Menu} from "..//src/components/menu/Menu.tsx"
import './App.css'
import {Outlet} from "react-router";

function App() {
    return (
        <>
This is App component.
            <Menu/>
            <Outlet/>
        </>
    );
}

export default App

