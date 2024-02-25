import React from 'react'
import { Button, TextField,Typography } from '@mui/material'

function Addblog() {
  return (
    <div>
       <Typography variant='h1'>AddBlog</Typography>
        <br /><br />
        <TextField variant='outlined' label="Blog name"/>
        <br />
        <TextField variant='outlined' label="Description"/><br /><br />
        <Button variant='contained' >submit</Button><br />
       
    </div>
  )
}

export default Addblog
