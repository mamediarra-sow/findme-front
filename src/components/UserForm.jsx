import UserPersonalForm from "./UserPersonalForm"
import { useState } from "react"
import ValidationForm from "./ValdiationForm"
import AdresseForm from "./AdresseForm"
import AdresseComponent from "./AdresseComponent"

const UserForm =  () =>{
    const [state, setState] = useState(
        {   step : 1,
            nom : "",
            prenom:"",
            telephone : "",
            num_villa : 0,
            nom_voie:"",
            code_postal:"",
            ville:"",
            pays:""


    })
// Next step stepper form
    const nextStep = () =>{
        setState({
            ...state,
            step: state.step+1
        });
    }
//Previous step Stepper form
    const prevStep = () =>{
        setState({
            ...state,
            step : state.step-1
        });
    }
///////// User Information ///////////////
// Change Nom
const handleChangeNom =  e =>{
    setState({
        ...state,
        nom : e.target.value
    });
}
// Change Prenom
const handleChangePrenom =  e =>{
    setState({
        ...state,
        prenom : e.target.value
    });
}
// Change Telephone
const handleChangeTelephone =  e =>{
    setState({
        ...state,
        telephone : e.target.value
    });
}
///////////// Adresse Information ////////////////
const handleChangeNumVilla =  e =>{
    setState({
        ...state,
        num_villa: e.target.value
    });
}
const handleChangeNomVoie =  e =>{
    setState({
        ...state,
        nom_voie : e.target.value
    });
}
const handleChangeCodePostal =  e =>{
    setState({
        ...state,
        code_postal : e.target.value
    });
    console.log(state.code_postal)
}
const handleChangeVille =  e =>{
    setState({
        ...state,
        ville : e.target.value
    });
}
const handleChangePays =  e =>{
    setState({
        ...state,
        pays : e.target.value
    });
}

// All values
const values  = {...state}

    switch(state.step){
        case 1 :

            return (
                <UserPersonalForm
                    nextStep={nextStep}
                    changePrenom = {handleChangePrenom}
                    changeNom = {handleChangeNom}
                    changeTelephone = {handleChangeTelephone}
                    values={values}/>
                )

        case 2 :
            return( 
                <ValidationForm 
                nextStep = {nextStep}
                prevStep = {prevStep}
                values={values}/>
            )
        case 3 :
            return( 
                    <AdresseForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    changeNumVilla={handleChangeNumVilla}
                    changeNomVoie = {handleChangeNomVoie}
                    changeCodePostal={handleChangeCodePostal}
                    changeVille={handleChangeVille}
                    changePays={handleChangePays}
                    values={values}/>
                )
        default :
                return(
                    <AdresseComponent 
                    telephone = {values.telephone}/>
                )
        }
    }

export default UserForm;