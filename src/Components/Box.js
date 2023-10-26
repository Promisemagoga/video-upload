import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function BoxLayOut() {
    return (
        // box acts as a div
        <Box sx={{backgroundColor:'burlywood', height:"100vh", width: "100%"}}>
            <Button variant='contained' sx={{backgroundColor:'chocolate'}}>First</Button>
            <Button variant='contained' sx={{backgroundColor:'chocolate'}}>Second</Button>
            <Button variant='contained' sx={{backgroundColor:'chocolate'}}>Third</Button>
            

        </Box>
    )
}

export default BoxLayOut