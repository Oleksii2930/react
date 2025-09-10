
import './App.css'
import MyComponent from "../myComponent/MyComponent.tsx";


function App() {
    return (
        <>
        <MyComponent text = {'hello1'}/>
        <MyComponent text = {'hello2'}/>
        <MyComponent text = {'hello3'}/>
            {/*{MyComponent({text:'hello 2'})*/}
        </>
    );
}

export default App

