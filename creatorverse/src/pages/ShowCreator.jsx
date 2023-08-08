import { useEffect } from 'react'
import { useState } from 'react';
import CreatorBox from '../components/CreatorBox';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

function ShowCreator(props){
    const [creators, setCreators] = useState([]);
    const navigate = useNavigate();

    async function fetchCreators(){
      const {data, err} = await supabase.from('creators').select("*");
      setCreators(data);
    }
  
    useEffect(() => {
      fetchCreators()
    }, [])
    // const creators = props.creators;
    // console.log(creators);
    // console.log(typeof(creators));
    const creatorBoxList = creators.map((creator) => <CreatorBox key={creator.id} creator = {creator}/>);
    // console.log(creatorList);
    

    function handleAddClick(){
      navigate("/add")
    }

    return(
        <div>
          <h1>Welcome To Creatorverse</h1>
          <h2>Top Creators</h2>
          <div>Add creators : <button onClick={handleAddClick}>Add</button></div>
            {creatorBoxList}
        </div>
    )
}

export default ShowCreator