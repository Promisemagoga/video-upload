import { DeleteOutlined, MenuBook, MenuOutlined } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

function NavigationBar() {
    const [anchor, setanChor] = useState(null)
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setanChor(null)
        setOpen(false)
    }

    const handleOpen = (event) => {
        setanChor(event.currentTarget)

        setOpen(true)
    }
    return (
        <div>
            <AppBar color='success'>
                <Toolbar >
                    <Typography variant='h4'>LOGO</Typography>
                    <Button variant='text' sx={{ marginLeft: "auto", marginRight: 5 }} style={{ color: "#FFF" }} >Sign In</Button>
                    <MenuOutlined sx={{marginRight:3}} onClick={handleOpen}/>
                    <Menu anchorEl={anchor} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>About</MenuItem>
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavigationBar