import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourcesPage = () => {

    useEffect(()=> {
        loadAuthProducts().then(products => {
        console.log(products);
        }).catch(reason => {
            console.log(reason);
            refresh().then(() => loadAuthProducts()).then(value => console.log(value));
        })
    }, [])
    //при завантаженні сторінки робить запит на отримання захищених ресурсів (продуктів), а якщо токен недійсний — оновлює токен і повторює запит.

    return (
        <div>
            AuthResourcesPage
        </div>
    );
};

export default AuthResourcesPage;