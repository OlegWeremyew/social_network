import React from "react";
import {Form, Formik, Field} from "formik";
import style from './UsersSearchForm.module.scss'

import {useSelector} from "react-redux";
import s from "../../../Login/Login.module.scss";
import {ReturnComponentType} from "../../../../types/ReturnComponentType";
import {getUsersFilter} from "../../../../selectors";
import {FilterType} from "../../../../redux/usersReducer/types";

const usersSearchFormValidate = (values: { term: string; friend: FriendFormType }) => {
    const errors = {}
    return errors
}

export const UsersSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}): ReturnComponentType => {

    const filter: FilterType = useSelector(getUsersFilter)

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }): void => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div className={style.search}>
            <Formik
                enableReinitialize
                initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {
                    ({isSubmitting}) => (
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
                                    Find
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
})

//types

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
    term: string
    friend: FriendFormType
}