import { Field, Form, Formik } from 'formik'

import toast from 'react-hot-toast'

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        if (values.query.trim() === '') return toast.error('Please enter movie name')

        onSearch(values.query)
        actions.resetForm()
      }}
    >
      <Form>
        <Field name={'query'}>{({ field }) => <input {...field} type="text" autoFocus autoComplete="off" />}</Field>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  )
}
