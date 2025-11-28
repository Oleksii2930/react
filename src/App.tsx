
import './App.css'
import {A} from "./component/A.tsx";
import {B} from "./component/B.tsx";
import {MyContextProvider} from "./context/MyContextProvider.tsx";
import {useState} from "react";


function App() {

    const[themeColor, setThemeColor] = useState<string>('light')


    return (
        <MyContextProvider.Provider value={{
            theme:themeColor,
            changeTheme:(themeValue:string)=> {
                setThemeColor(themeValue)
            }
        }}>
        <div>
            <A/>
            <B/>
        </div>
        </MyContextProvider.Provider>
    );
}

export default App

