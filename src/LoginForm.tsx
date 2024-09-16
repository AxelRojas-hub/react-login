/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from './TextField';

type FormProps={
    onLogin: (params:{email:string, password: string})=>any
}


function LoginForm(props:FormProps){
    function onSubmitHandler(e:any){
        e.preventDefault();
        props.onLogin({
            email: e.target.email.value,
            password: e.target.password.value
        })
    }
    return <form className="login-form" onSubmit={onSubmitHandler}>
        <TextField label='Email' type='email'></TextField>
        <TextField label='Password' type='password'></TextField>
        <button>Enviar</button>
    </form>
}
export {LoginForm}