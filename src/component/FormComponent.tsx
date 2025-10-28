import {type FormEvent, useState} from "react";

interface IFormProps {
    username: string;
    password: string;
}

export const FormComponent = () => {
     const[formState, setFormState] = useState<IFormProps>({
         username:'foobar',
         password:'1111'
     })

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username:formState.username,
            password:formState.password};
        console.log(user);

    };

//     const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
// const input = e.target as HTMLInputElement;
// console.log(input.value)
//         setFormState({...formState, username:input.value});
//     };
//     const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
//         const input = e.target as HTMLInputElement;
//         console.log(input.value)
//         setFormState({...formState, password:input.value});
//     };

        const handleInputdChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.name)
            setFormState({...formState, [input.name]: input.value})
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputdChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputdChange}/>
                    <button>Send</button>
            </form>
        </div>
    );
};

