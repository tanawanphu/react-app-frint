import { useState } from "react";
import { sculpturelist } from "./data";
export default function Gallery(){
    const [index,setIndex] = useState(0);
    function handleClickLink(){
        setIndex(index + 1);
    }
    function handleClickBack(){
        setIndex(index - 1);
    }

    let sculpture = sculpturelist[index];
    return(
        <>

        <button onClick={handleClickLink} disabled={index === sculpturelist.length -1 }> Next </button>
        
        
        <h2>
            <i>{sculpture.name}</i> by {sculpture.artist}
        </h2>
        <h3>({index + 1} of {sculpturelist.length}) </h3>
        <img 
        src={sculpture.url}
        alt={sculpture.alt}
        />
        <p>
           <h2> {sculpture.description}</h2>
        </p>

        <button onClick={handleClickBack} disabled ={index === 0}> Back </button>
        </>
    );
}