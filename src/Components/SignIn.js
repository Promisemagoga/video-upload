
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
// import { Visibility, VisibilityOff } from '@material-ui/icons';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box width={"100%"} height={"100vh"} sx={{ display: "flex" }}>
            <Box bgcolor={"#fff"} sx={{ width: "35%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={require("../assets/Logo.jpg")} width={"80%"} height={"35%"} />
            </Box>
            <Box bgcolor={"#1C3F53"} sx={{ width: "65%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Paper sx={{ width: "70%", height: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                    <Box sx={{ width: "70%", height: "auto", display: "flex", flexDirection: "column", rowGap: "40px", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant='h1' fontSize="36px" fontWeight='500'>
                            EZAMAZWE EDUTECH
                        </Typography>
                        <Typography variant='P' fontSize="24px" fontWeight="400" >
                            Login to your account
                        </Typography>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", rowGap: "10px" }}>
                            <Typography variant='P' marginRight="auto" sx={{ fontSize: "16px", fontWeight: "400", color: "#1C3F53" }}>
                                Email address
                            </Typography>
                            <TextField id="outlined-basic" variant="outlined" sx={{ width: "100%" }} inputProps={{ style: { height: '30px', borderRadius: "20px" } }} />
                            <Typography variant='P' marginRight="auto" sx={{ fontSize: "18px", fontWeight: "400", color: "#FF6347" }}>
                                #email address is invalid
                            </Typography>
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", rowGap: "10px" }}>
                            <Typography variant='P' marginRight="auto" sx={{ fontSize: "16px", fontWeight: "400", color: "#1C3F53" }}>
                                Your password
                            </Typography>
                            <TextField
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleTogglePasswordVisibility}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}

                                id="outlined-basic" variant="outlined" sx={{ width: "100%" }} inputProps={{ style: { height: '30px' } }} />
                            <Typography variant='P' marginRight="auto" sx={{ fontSize: "18px", fontWeight: "400", color: "#FF6347" }}>
                                #password is invalid
                            </Typography>
                        </Box>
                        <Typography variant='P' marginLeft="auto" sx={{ textDecoration: "underLine", fontSize: "16px", fontWeight: "400", color: "#1C3F53" }}>
                            Forgot Your password
                        </Typography>
                        <Button variant="contained" sx={{ width: "60%", height: "50px", borderRadius: "30px", fontSize: "20px", fontWeight: "400", backgroundColor: "#1C3F53" }}>SIGN IN</Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
