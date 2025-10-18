import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import type {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {cartService} from "../../services/api.service.ts";


export const CartsComponent = () => {

    const{id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if(id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts);
                });
        }
        }, [id])



console.log(id);
    return (
        <div>
            {carts.map((cart:ICart) => (<div key={cart.id}>{cart.total}</div>))}
        </div>
    );
};

