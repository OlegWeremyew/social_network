import {Form, Formik, Field} from "formik";
import React from "react";
import {FilterType} from "../../../../redux/usersReducer";

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

export const UsersSearchForm = React.memo(({onFilterChanged}: PropsType) => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }

        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                initialValues={{term: "", friend: "null"}}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {
                    ({isSubmitting}) => (
                        <Form>
                            <Field type="text" name="term"/>
                            <Field name="friend" as="select">
                                <option value="null">All</option>
                                <option value="true">Only followed</option>
                                <option value="false">Only unfollowed</option>
                            </Field>
                            <button type="submit" disabled={isSubmitting}>
                                Find
                            </button>
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