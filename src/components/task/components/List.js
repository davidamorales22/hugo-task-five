import { List, ListItem, ListItemText, TextField, Toolbar, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'

const MyList = ({ ctrl }) => {
  useEffect(() => {
    console.log('ctrl.data', ctrl.data)
  }, [ctrl.data])
  return (
    <>
      <Typography variant='h6'>List</Typography>
      <Toolbar disableGutters>
        <TextField label='buscar' fullWidth variant='outlined' onChange={ctrl.handleFilter} />
      </Toolbar>
      <List>
        {
          ctrl?.dataFiltered.map((item, index) => (
            <ListItem key={`item-list-${index}`} button onClick={ctrl.handleSelect(index)} selected={index === ctrl.selection}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default MyList
