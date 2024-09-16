type TextFieldProps ={
    label: string, 
    type: string
}
function TextField(props:TextFieldProps){
    return <label htmlFor={props.type}>
                <h3>{props.label}</h3>
                <input type={props.type} name={props.type} required/>
            </label>
}
export {TextField}