import {Outlet} from "react-router";
import {Menu} from "./components/Menu/Menu.tsx"

function App() {
    return (
        <>
            <Menu/>
            <hr />
<Outlet/>
        </>
    );
}

export default App

