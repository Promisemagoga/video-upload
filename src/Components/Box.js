import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function BoxLayOut() {
    return (
        // box acts as a div
        <Box  sx={{backgroundColor:'burlywood', height:"100vh", width: "100%",display:"flex",flexDirection:"column", rowGap:"20px", justifyContent: "center",alignItems:"center"}} >
            <Button variant='contained' sx={{backgroundColor:'chocolate',width:'300px'}}>First</Button>
            <Button variant='contained' sx={{backgroundColor:'chocolate', width:'300px'}}>Second</Button>
            <Button variant='contained' sx={{backgroundColor:'chocolate', width:'300px'}}>Third</Button>
        </Box>
    )
}

export default BoxLayOut