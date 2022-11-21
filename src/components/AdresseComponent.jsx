import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';

const AdresseComponent = ({telephone}) => {
    const [state, setState] = useState({})

    useEffect(() =>{
        const fetchData = async() =>{
            const resp = await fetch(`http://127.0.0.1:8000/getAdresse/${telephone}`,{
            method: "GET",
                headers:{
                    'Content-Type':'application/json',
                },
        })
        const adresse = await resp.json()
        setState(adresse)
        }
        
        fetchData();

    })
 
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#0e4686'}}>
          <ListItem>
            <ListItemText style={{color:'white'}} primary={`Numéro de villa : ${state.num_villa} `}/>
          </ListItem>
          <ListItem>
            <ListItemText style={{color:'white'}} primary={`Nom de voie : ${state.nom_voie} `}/>
          </ListItem>
          <ListItem>
            <ListItemText style={{color:'white'}} primary={`Code Postal : ${state.code_postal} `}/>
          </ListItem>
          <ListItem>
            <ListItemText style={{color:'white'}} primary={`Ville : ${state.ville} `}/>
          </ListItem>
          <ListItem>
            <ListItemText style={{color:'white'}} primary={`Pays : ${state.pays} `} />
          </ListItem>
        </List>
      );
    }

export default AdresseComponent;
