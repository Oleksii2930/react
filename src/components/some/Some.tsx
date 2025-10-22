import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

const Some = () => {
    const [qwery, setQwery] = useSearchParams()
    useEffect(() => {
        const pg = qwery.get('pg');
        console.log(pg);
        fetch('https://reqres.in/api/users?page=' +pg)
        .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }, [qwery])
    return (
        <div>

        </div>
    );
};

export default Some;