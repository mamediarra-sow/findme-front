import  TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Box, InputLabel} from "@mui/material";

const AdresseForm = ({nextStep,values,changeNumVilla,changeNomVoie,
                        changeCodePostal,changeVille,changePays,prevStep}) => {

    const [state, setState] = useState({
        error:false,
        erroe_message:""

    })

////////////////////////////////////////////
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (values.num_villa===0 || values.nom_voie==="" || values.code_postal===""
        || values.ville==="" || values.pays===""){
            setState({
                error:true,
                error_message : "field required"
            });
            }
        else{
            let res = await fetch(`http://127.0.0.1:8000/sendAdress/${values.telephone}`, {
                method: "POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    num_villa: values.num_villa,
                    nom_voie: values.nom_voie,
                    code_postal: values.code_postal,
                    ville : values.ville,
                    pays  : values.pays
                }),
            });
            console.log()
            nextStep();
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
                <InputLabel>Num Villa</InputLabel>
                <TextField
                    required
                    label="Num Villa"
                    type='number'
                    error = {state.error && values.num_villa === 0}
                    helperText = {state.error && values.num_villa === 0?state.error_message:""}
                    onChange = {changeNumVilla}
                    defaultValue = {values.num_villa}/>
                <br/>
                <InputLabel>Nom Voie</InputLabel>
                <TextField
                    required
                    label="Nom Voie"
                    error = {state.error && values.nom_voie.length === 0}
                    helperText = {state.error && values.nom_voie.length === 0?state.error_message:""}
                    onChange = {changeNomVoie}
                    defaultValue = {values.nom_voie}/>
                <br/>
                <InputLabel>Code_postal</InputLabel>
                <TextField
                    required
                    label="Code Postal"
                    error = {state.error && values.code_postal.length === 0}
                    helperText = {state.error && values.code_postal.length === 0?state.error_message:""}
                    onChange = {changeCodePostal}
                    defaultValue = {values.code_postal}/>
                <br/>
                <InputLabel>Ville</InputLabel>
                <TextField
                    required
                    label="Ville"
                    error = {state.error && values.ville.length === 0}
                    helperText = {state.error && values.ville.length === 0?state.error_message:""}
                    onChange = {changeVille}
                    defaultValue = {values.ville}/>
                <br/>
                <InputLabel>Pays</InputLabel>
                <TextField
                    required
                    label="Pays"
                    error = {state.error && values.pays.length === 0}
                    helperText = {state.error && values.pays.length === 0?state.error_message:""}
                    onChange = {changePays}
                    defaultValue = {values.pays}/>
                <br/>
                <Button variant="contained" onClick={handlePrev} >Previous</Button>
                <Button variant="contained" onClick={handleSubmit} >Submit</Button>
                </Box>
    )
} 
export default AdresseForm;
