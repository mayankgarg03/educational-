import React from 'react';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const PlayButton=({handlePause})=>{
    
    return (
        <>
        <button onClick={()=>handlePause()} style={{marginTop:'20px', position:"relative",marginLeft:'225px',backgroundColor:'unset'}}> <PlayArrowIcon fontSize="large"/> </button> 
        </>
    )

}