import { Alert, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavigationBar from './Appbar';

export default function HellowWorld() {
    //instead of have ustate for name, password and age
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        age: 0,
        subScribe: false,
        gender: "",
    })
    function greetings() {

        alert("Successfully said Hi to Promise");
    }

    function Error() {
        alert("Something went wrong: You forgot to wear your smile when saying  Hi to Promise");
    }

    function fairGreetings() {
        alert("Fair  enough: At least you gave her a hug as a greeting, even though you didn't smile");
    }

    const handleChange = (event) => {
        setInputs((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs);
    }

    return (
        <div>
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <br/>

            <Typography variant='h2' align='center' >Hellow World</Typography>
            <Button variant='contained' color='success' size='large' sx={{ margin: 3 }} onClick={greetings}>Hello</Button>
            <Button variant='outlined' color='error' size='medium' sx={{ margin: 3 }} onClick={Error}>Hello</Button>
            <Button variant='text' color='info' size='small' sx={{ margin: 3 }} onClick={fairGreetings}>Hello</Button>
            {/* sx is useed to define styling for text sx={{color: "red", border: "1px solid blue", borderRadius: 10}}*/}
            <form style={{ display: "flex",  flexDirection: "column" }}  onSubmit={handleSubmit}>
                <TextField type={"email"} required onChange={handleChange} placeholder='email' variant='outlined' sx={{ margin: 3 }} value={inputs.email} name='email' />
                <TextField type={"password"} onChange={handleChange} placeholder='password' variant='standard' sx={{ margin: 3 }} value={inputs.password} name='password' />
                <TextField type={"number"}  onChange={handleChange} placeholder='age' variant='filled' sx={{ margin: 3 }} value={inputs.age} name='age' />
                <FormGroup sx={{ margin: 3 }}>
                    <FormControlLabel label="Subscribe to news letter" control={<Checkbox color='secondary' />} onChange={(event) => setInputs((prevState) => ({
                        ...prevState,
                        subScribe: !inputs.subScribe
                    }))} name='subScribe' />
                    {/* <FormControlLabel required control={<Checkbox color='success defaultChecked'/>} label="Required" />
                    <FormControlLabel disabled control={<Checkbox/>} label="Disabled" /> */}
                </FormGroup>
                <FormControl sx={{ margin: 3 }} fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select
                    name='gender'
                        value={inputs.gender}
                        label="Gender"
                        onChange={handleChange}
                    >
                        <MenuItem value={"female"}>Female</MenuItem>
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"non-binary"}>Non-binary</MenuItem>
                    </Select>
                </FormControl>
                <Button variant='contained' color='secondary' type='submit' sx={{ margin: 3 }}>Submit</Button>
            </form>

            <Typography variant='h6' sx={{ margin: 3 }} >{inputs.email}</Typography>
            <Typography variant='h6' sx={{ margin: 3 }} >{inputs.password}</Typography>
            <Typography variant='h6' sx={{ margin: 3 }} >{inputs.age}</Typography>
            <Typography variant='h6' sx={{ margin: 3 }} >{inputs.gender}</Typography>


            <img src={require("../assets/Logo.jpg")}/>

        </div>
    )
}
