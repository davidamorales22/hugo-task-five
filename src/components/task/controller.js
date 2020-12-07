import * as Yup from 'yup'
import { useFormik } from 'formik'
import { formikUtil, msg } from 'src/commons/utils'
import React from 'react'

export default function useController () {
  const [data, setData] = React.useState([])
  const [dataFiltered, setDataFiltered] = React.useState([])
  const [selection, setSelection] = React.useState(null)
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(msg.required),
      surname: Yup.string().required(msg.required)
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      console.log('values', values)
      //   accept()
    }
  })
  const formikUtils = formikUtil(formik)

  // CRUD
  const handleAdd = () => {
    if (formik.isValid) {
      setData(prev => [...prev, { ...formik.values }])
      setSelection(null)
    }
  }
  const handleDelete = () => {
    const newData = [...data]
    newData.splice(selection, 1)
    setData(newData)
    setSelection(null)
  }
  const handleUpdate = () => {
    const newData = data
    newData[selection] = { ...formik.values }
    setData(newData)
  }
  const handleSelect = index => _event => {
    setSelection(index)
    formik.setValues(data[index])
  }
  const handleFilter = event => {
    const txt = event.target.value
    if (txt.length > 0) {
      setDataFiltered(data.filter(item =>
        item.name.toUpperCase().includes(txt.toUpperCase()) ||
            item.surname.toUpperCase().includes(txt.toUpperCase())
      ))
    } else setDataFiltered(data)
    setSelection(null)
    formik.resetForm()
  }
  React.useEffect(() => {
    setDataFiltered(data)
    formik.resetForm()
  }, [data])

  return {
    formik: formik,
    formikProps: formikUtils.formikProps,
    handleAdd,
    handleDelete,
    handleUpdate,
    handleSelect,
    selection,
    data,
    dataFiltered,
    handleFilter
  }
}
