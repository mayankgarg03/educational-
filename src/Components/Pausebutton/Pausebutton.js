import React from 'react';
import PauseIcon from '@mui/icons-material/Pause';


export const PauseButton=({handlePause})=>{
   
    return (
        <>
        <button onClick={()=>handlePause()} style={{marginTop:'20px', position:"relative",marginLeft:'225px',backgroundColor:'unset'}}> <PauseIcon fontSize="large"/> </button>

        </>
       
        
    )

}