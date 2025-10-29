import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

export const FormComponent = () => {


const {
    handleSubmit,
    register,
formState: {errors, isValid }
} = useForm<IFormProps>({
    mode:"all"
});


const customHandler = (formDataProps:IFormProps) => {
    console.log(formDataProps);
}
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type="text" {...register('username', {
                    required:true,
                    minLength: {value:1, message:'wrong name'}
                })}/>
                {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label><input type="text" {...register('password', {
                    required:true,
                    minLength: {value:3, message:'pass too short'},
                    maxLength: {value:6, message:'pass too long'}
                })}/>
                    {errors.password && <div>{errors.password.message}</div>}

                </label>
                <label><input type="number" {...register('age', {
                    required:true,
                    valueAsNumber:true,
                    min:{value:1, message:'age too small'},
                    max:{value:117, message:'age too long'},
                })}/>
                    {errors.age && <div>{errors.age.message}</div>}

                </label>
                    <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

