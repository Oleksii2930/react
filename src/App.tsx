
import './App.css'
import {useEffect} from "react";
import {getAllUsers, saveUser} from "./services/user.service.ts";


function App() {
    useEffect(()=>{
        getAllUsers().then(value => console.log(value));

        saveUser({id:1, name:"oleksii", email:"cjwebicwbi@gmail.com"}).then(res => console.log(res));
        }, []);
    return (
        <>

        </>
    );
}

export default App

