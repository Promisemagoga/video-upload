// import Button from '@mui/material/Button';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//     },
//   });

export default function SignIn() {
    // const classes = useStyles();
    return (
        <Grid container  direction={'row'}>
            <Box style={{backgroundColor: "#1C3F53"}} width={883} height={700}>
                <Paper square={false} style={{padding:20, width: "450px",marginLeft: 'auto', marginRight: 'auto'}}>
                <Typography variant='h3' component="h1" fontSize="32px">
                    EZAMAZWE EDUTECH
                </Typography>
                <Typography variant='P' component="P" mt="50px" mb={2}>
                    Login to your account
                </Typography>
                <Typography variant='P' component="P" mt="57px" mb={2} align='left'>
                    Email address
                </Typography>
                <TextField id="outlined-basic" variant="outlined"  fullWidth/>
                <Typography variant='P' component="P" mt={3} mb={2} align='left'>
                    Your password
                </Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
                <br />
                <br />
                <Button variant="contained" size='large'>SIGN IN</Button>
                </Paper>
            </Box>
           




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

        </Grid>
    )
}
