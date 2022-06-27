import React from 'react';

import { Field } from 'redux-form';
import { Validator } from 'redux-form/lib/Field';

import { Nullable } from 'types/Nullable';
import { ReturnComponentType } from 'types/ReturnComponentType';

export function createField<T extends string>(
  placeholder: Nullable<string>,
  name: T,
  validators: Validator | Validator[],
  component: any,
  props: { type: string },
  text?: string,
): ReturnComponentType {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      />{' '}
      {text}
    </div>
  );
}
