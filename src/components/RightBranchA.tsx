import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const RightBranchA = () => {

    const {counterValue, increment}= useContext(MyContext);


    return (
        <div>
            RightBranchA

            <button onClick={() => {
                increment(counterValue);
            }}>click me to increment in LBA</button>
        </div>
    );
};

export default RightBranchA;