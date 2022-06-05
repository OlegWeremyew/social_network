import {Nullable} from "../../../types/Nullable";
import {Validator} from "redux-form/lib/Field";
import {componentType} from "../types";
import {Field} from "redux-form";
import React from "react";

export function createField<T extends string>(placeholder: Nullable<string>, name: T, validators: Validator | Validator[], component: componentType, props: { type: string }, text?: string) {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                validate={validators}
                {...props}
            /> {text}
        </div>
    )
}