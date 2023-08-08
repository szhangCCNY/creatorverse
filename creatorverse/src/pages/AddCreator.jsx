import { useLocation } from "react-router-dom"
import { supabase } from "../client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCreator(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [imageURL, setImgURL] = useState("");
    const [description, setDescription] = useState("");


    function onHomeClick(){
        navigate('/')
    }

    async function onAddClick(){
        const { error } = await supabase
                                .from('creators')
                                .insert({ name: name, url: url, imageURL: imageURL, description: description })
        // navigate back to home
        if (!(error)){
            navigate('/', {replace: true})
        }
    }

    function handleInputChange(event, setFunc){
        setFunc(event.target.value)
    }

    return(
        <div>
            <form>
                <label>
                    name: <input defaultValue={name} onChange={(e) => handleInputChange(e, setName)}/>
                </label>
                <label>
                    url: <input defaultValue={url} onChange={(e) => handleInputChange(e, setUrl)}/>
                </label>
                <label>
                    imgURL: <input defaultValue={imageURL} onChange={(e) => handleInputChange(e, setImgURL)}/>
                </label>
                <label>
                    description: <input defaultValue={description} onChange={(e) => handleInputChange(e, setDescription)}/>
                </label>
            </form>
            <button onClick={onAddClick}>Add</button>
            <button onClick={onHomeClick}>home</button>
        </div>
    )

}

export default AddCreator