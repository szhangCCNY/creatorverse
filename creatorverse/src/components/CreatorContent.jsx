
function CreatorContent(props){
    // console.log(props);
    const creator = props.creator;
    const name = creator.name;
    const url = creator.url;
    const imageURL = creator.imageURL;
    const desc = creator.description;
    // const name = CreatorContentProp.name;
    // const url = CreatorContentProp.url;
    // const imageURL = CreatorContentProp.imageURL;
    // const desc = CreatorContentProp.desc;
    return(
        <div>
            <div>{name}</div>
            <div>{url}</div>
            <div>{desc}</div>
            <img src={imageURL} height={200} width={200}/>
        </div>
    )
}

export default CreatorContent