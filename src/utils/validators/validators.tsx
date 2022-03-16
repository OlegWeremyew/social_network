import React from 'react';

export type ReturnValidatorType = string | undefined

export const required = (value: string): ReturnValidatorType => {
    if (value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxLength: number) => (value: string): ReturnValidatorType => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}