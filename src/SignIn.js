// import Button from '@mui/material/Button';
import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

export default function SignIn() {
    return (
        <Paper p={3}>
            <Typography variant='h3' component="h1" fontSize= "32px">
                EZAMAZWE EDUTECH
            </Typography>
            <Typography variant='P' component="P" mt="50px" mb={2} align='l'>
                Login to your account
            </Typography>
            <Typography variant='P' component="P" mt="57px" mb={2} align='l'>
                Email address
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Typography variant='P' component="P" mt={3} mb={2}>
                Your password
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <br />
            <br />
            <Button variant="contained" size='large'>SIGN IN</Button>
            
            {/* <Button variant="outlined" color='error'>Cancel</Button>
        <br/>
        <br/> */}
            {/* <br/>
        <br/>
        <Button color='success' variant="contained" >Success</Button>
        <br/>
        <br/> */}
            {/* <Button variant="cta" >SIGN IN</Button>

        <Button size="large" variant="contained">Large</Button> */}
        </Paper>
    )
}
