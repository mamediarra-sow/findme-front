import  TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Alert, Box, InputLabel} from "@mui/material";

const ValidationForm = ({nextStep,prevStep,values}) => {


    const [code, setCode] = useState(Number)
    const [state, setState] = useState({
        error:false,
        erroe_message:"",
        error_fetch:false,
        display_error_fetch:""

    })

    
/////////////////////////////////////////////
    const handleChange =  e =>{
    setCode(parseInt(e.target.value));
}
////////////////////////////////////////////
    const handleNext = async (event) =>{
        event.preventDefault();
        if (code===0){
            setState({
                error:true,
                error_message : "field required"
            });
            }
        else if (isNaN(code) || code.toString().length!==4){

            setState({
                error:true,
                error_message : "invalid value should be 4 digit code"
            });
        }
        else{
                let res = await fetch(`http://127.0.0.1:8000/verify/${values.telephone}/${code}`, {
                method: "GET",
                headers:{
                    'Content-Type':'application/json; charset=UTF-8',
                },
            });
            if(!res.ok){
                setState({
                    ...state,
                    error_fetch:true,
                    display_error_fetch:"Code Invalid"
                })
            }
            else{
                nextStep();
            }
        }
    }

    const handlePrev = (event) =>{
        event.preventDefault();
        prevStep();

    }

/////////////////////////////////////////
    return (
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                {state.error_fetch ?<Alert Alert severity="error">{state.display_error_fetch}</Alert>:<></>}

                <InputLabel>Code de validation</InputLabel>
                <TextField
                    required
                    error = {state.error}
                    helperText = {state.error_message}
                    label="Required"
                    onChange = {handleChange}/>
                <br/>
                    <Button variant="contained" onClick={handlePrev} >Previous</Button>
                    <Button variant="contained" onClick={handleNext} >Next</Button>
                </Box>
    )

} 
export default ValidationForm;