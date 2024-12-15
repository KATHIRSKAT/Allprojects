function Listitem(props)
{
    const curitems=props.items
    const newlist =curitems.map((item)=> (<li key={item.id}>{item.name} <button onClick={()=>props.handledelete(item.id)}></button></li>))
   
    return(
        <>
        <ul>
        {newlist}
        </ul>
        </>
    )
}
export default Listitem