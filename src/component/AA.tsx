import './AA.css'
import {useContext} from "react";
import {MyContextProvider} from "../context/MyContextProvider.tsx";

export const AA = () => {

    const{theme} = useContext(MyContextProvider);
    return (
        <div className={theme}>
            {theme}
        </div>
    );
};

