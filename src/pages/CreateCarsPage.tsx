import {useForm} from "react-hook-form";
import type {ICar} from "../models/ICar.ts";

export  const CreateCarsPage = () => {

    const {register, handleSubmit, formState:{errors} } = useForm<ICar>({mode:'all'})

    const createHandler = (data:ICar)=> {

    }
    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)}>
                <input type="text" {...register('brand')}/>
                <input type="number" {...register('price')}/>
                <input type="number" {...register('year')}/>
            </form>
        </div>
    );
};

