import {
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core'
import React from 'react'

const Form = ({ ctrl }) => {
  return (
    <Container>
      <form onSubmit={ctrl?.formik.handleSubmit} noValidate autoComplete='off'>
        <Typography variant='h6'>Form</Typography>
        <Box height={24} />
        <TextField
          {...ctrl?.formikProps('name', 'Name')}
          variant='outlined'
          fullWidth
        />
        <Box height={24} />
        <TextField
          {...ctrl?.formikProps('surname', 'Surname')}
          variant='outlined'
          fullWidth
        />
        <Box height={24} />
        <Toolbar>
          <Box flex={1} />
          <Button
            type='submit'
            variant='contained'
            disabled={!ctrl?.formik.isValid}
            color='secondary'
            disableElevation
            onClick={ctrl?.handleAdd}
          >
                Create
          </Button>
          <Box width={8} />
          <Button
            type='submit'
            variant='contained'
            disabled={!ctrl?.formik.isValid}
            color='primary'
            disableElevation
            onClick={ctrl?.handleUpdate}
          >
            Update
          </Button>
          <Box width={8} />
          <Button
            disabled={!ctrl?.formik.isValid}
            color='primary'
            disableElevation
            onClick={ctrl?.handleDelete}
          >
            Delete
          </Button>
        </Toolbar>
      </form>
    </Container>
  )
}

export default Form
