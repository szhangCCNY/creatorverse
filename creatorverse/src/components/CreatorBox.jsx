import CreatorContent from "./CreatorContent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { supabase } from "../client";

function CreatorBox(props){
    // creator box 
    // contains creator content
    // edit and delete icon

    // when click -> view page
    const [deleted, setDeleted] = useState(false);


    const navigate = useNavigate();

    console.log("props from creatorbox", props);
    const creator = props.creator;
    const creatorId = creator.id;

    const viewPath = `/view/${creatorId}`
    const editPath = `/edit/${creatorId}`


    function onCreatorBoxClick(){
        // navigate(viewPath);
        console.log(creator);
        navigate(viewPath,
            {
                state: {
                    creator : creator
                }
            });
    }

    function onEditClick(){
        console.log("edit button clicked");
        navigate(editPath,
            {
                state: {
                    creator : creator
                }
            });
    }

    async function onDeleteClick(){
        // console.log("delete button clicked");
        // try delete from db
        // if ok -> set deleted state to true

        const { error } = await supabase
                                .from('creators')
                                .delete()
                                .eq('id', creatorId);
        if (!(error)){
            setDeleted(true);
        }
    }

    if (!(deleted)){
        return(
            <div>
                <div onClick={onCreatorBoxClick}>
                    <CreatorContent creator={creator}/>

                </div>
                <button onClick={onEditClick}>edit</button>
                <button onClick={onDeleteClick}>delete</button>
            </div>
        )
    }
    return null
}

export default CreatorBox;