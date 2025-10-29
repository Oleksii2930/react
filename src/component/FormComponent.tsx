import {useForm} from "react-hook-form";
import {userValidator} from "../validators/user.validator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
interface IFormProps {
    username: string;
    password: string;
    age: number;
}

export const FormComponent = () => {


const {handleSubmit, register, formState: {errors, isValid }
} = useForm<IFormProps>({
    mode:"all",resolver: joiResolver(userValidator)
});


const customHandler = (formDataProps:IFormProps) => {
    console.log(formDataProps);
}
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('password')}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>

                <label>
                    <input type="number" {...register('age')}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                    <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

