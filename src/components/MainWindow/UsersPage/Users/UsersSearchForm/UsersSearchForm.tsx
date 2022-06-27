import React, { FC, memo } from 'react';

import { Form, Formik, Field } from 'formik';
import { useSelector } from 'react-redux';

import { FormType, FriendFormType, PropsType } from './types';
import style from './UsersSearchForm.module.scss';

import s from 'components/Login/Login.module.scss';
import { FilterType } from 'redux/usersReducer/types';
import { getUsersFilter } from 'selectors';

const usersSearchFormValidate = (values: {
  term: string;
  friend: FriendFormType;
}): object => {
  const errors = {};
  return errors;
};

export const UsersSearchForm: FC<PropsType> = memo(({ onFilterChanged }) => {
  const filter: FilterType = useSelector(getUsersFilter);

  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ): void => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true',
    };
    onFilterChanged(filter);
    setSubmitting(false);
  };

  return (
    <div className={style.search}>
      <Formik
        enableReinitialize
        initialValues={{
          term: filter.term,
          friend: String(filter.friend) as FriendFormType,
        }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form className={style.searchForm}>
            <div className={style.searchForm__block}>
              <Field
                className={style.searchForm__item__input}
                type="text"
                name="term"
                placeholder="Write user name 🔎"
              />
              <Field className={style.searchForm__item__select} name="friend" as="select">
                <option value="null">All</option>
                <option value="true">Only followed</option>
                <option value="false">Only unfollowed</option>
              </Field>
            </div>
            <div className={s.form__btn}>
              <button type="submit" disabled={isSubmitting}>
                Find users 🔎
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
});
