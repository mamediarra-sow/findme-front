import  TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Alert, Box, InputLabel} from "@mui/material";

const UserPersonalForm = ({nextStep, changePrenom, changeNom, changeTelephone,values}) => {

    const [state, setState] = useState({
        error:false,
        error_message:"",
        error_fetch: false,
        display_error_fetch:""


    })

////////////////////////////////////////////
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (values.prenom==='' || values.nom==="" || values.telephone===""){
            setState({
                ...state,
                error:true,
                error_message : "field required"
            });
            }
        else{
            try {
                let res = await fetch("http://127.0.0.1:8000/sendUser", {
                method: "POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    nom: values.nom,
                    prenom: values.prenom,
                    telephone: values.telephone,
                }),
            });
                if(!res.ok){
                    setState({
                        ...state,
                        error_fetch:true,
                        display_error_fetch:"User Already exist"
                    })
                }
                else{
                nextStep();
            }
            
            }
            catch(e) {
                setState({
                    ...state,
                    error_fetch:true,
                    display_error_fetch:"Telephone not valid"
                })

            }
                
        }
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
                <InputLabel>Prénom</InputLabel>
                <TextField
                    required
                    label="Prenom"
                    error = {state.error && values.prenom.length === 0}
                    helperText = {state.error && values.prenom.length === 0?state.error_message:""}
                    onChange = {changePrenom}
                    defaultValue = {values.prenom}/>
                <br/>
                <InputLabel>Nom</InputLabel>
                <TextField
                    required
                    label="Nom"
                    error = {state.error && values.nom.length === 0}
                    helperText = {state.error && values.nom.length === 0?state.error_message:""}
                    onChange = {changeNom}
                    defaultValue = {values.nom}/>
                <br/>
                <InputLabel>Téléphone</InputLabel>
                <TextField
                    required
                    label="Telephone"
                    error = {state.error && values.telephone.length === 0}
                    helperText = {state.error && values.telephone.length === 0?state.error_message:""}
                    onChange = {changeTelephone}
                    defaultValue = {values.telephone}/>
                <br/>
                <br/>
                <Button variant="contained" onClick={handleSubmit}>Next</Button>
                </Box>
    )
} 
export default UserPersonalForm