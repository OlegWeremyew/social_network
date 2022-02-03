import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: number
    rememberMe: boolean
}

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    name={"login"}
                    placeholder={"Login"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={"password"}
                    type={"password"}
                    placeholder={"Password"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={"checkbox"}
                    name={"rememberMe"}
                    type={"checkbox"}
                /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: "Login"})(LoginForm)