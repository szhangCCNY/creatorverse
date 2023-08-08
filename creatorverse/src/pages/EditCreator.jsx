import { useLocation } from "react-router-dom"
import { supabase } from "../client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditCreator(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const creator = state.creator;
    const id = creator.id;

    const [name, setName] = useState(creator.name);
    const [url, setUrl] = useState(creator.url);
    const [imageURL, setImgURL] = useState(creator.imageURL);
    const [description, setDescription] = useState(creator.description);




    function onHomeClick(){
        navigate('/', {replace: true})
    }

    async function onUpdateClick(){
        const { error } = await supabase
                                .from('creators')
                                .update({ name: name, url: url, imageURL: imageURL, description: description })
                                .eq('id', id)
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
            <button onClick={onUpdateClick}>update</button>
            <button onClick={onHomeClick}>home</button>
        </div>
    )

}

export default EditCreator