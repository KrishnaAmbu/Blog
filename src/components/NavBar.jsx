import { Typography } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


function NavBar() {
    return (
 
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
           Blog
          </Typography>
     
                <Button >
                    <Link to="/add" >AddBlog</Link>
                </Button>



        
        </Toolbar>
      </AppBar>
    </Box>

    


    </div>
  )
}

export default NavBar
