import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const LeftBranchA = () => {

    const {counterValue} = useContext(MyContext);
    
    return (
        <div>
            LeftBranchA <br/>
            current counter value is = {counterValue}
        </div>
    );
};

export default LeftBranchA;