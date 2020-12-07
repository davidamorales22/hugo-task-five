import {
  Box,
  Container,
  Divider,
  Grid,
  Typography
} from '@material-ui/core'
import React from 'react'
import Form from './components/Form'
import List from './components/List'
import useController from './controller'

const Task = () => {
  const ctrl = useController()
  return (
    <Container>
      <Box minHeight={600}>
        <Typography variant='h5' color='primary' align='center'>
          CRUD
        </Typography>
        <Divider />
        <Box height={24} />
        <Grid container spacing={0}>
          <Grid item xs={6}>
            {/* LISTA */}
            <List ctrl={ctrl} />
          </Grid>
          <Grid item xs={6}>
            {/* FORMULARIO */}
            <Form ctrl={ctrl} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Task
