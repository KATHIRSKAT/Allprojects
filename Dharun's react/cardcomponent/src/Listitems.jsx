function Listitems()
{
    const bikes=[{id:1,model:"rx",price:1},{id:2,model:"fz",price:1.5},{id:3,model:"r15",price:2},{id:4,model:"mt",price:3},{id:5,model:"rc390",price:3.5}]
    bikes.sort((a,b)=>b.model.localeCompare(a.model))
    const list=bikes.map(bike=><li key={bike.id}>{bike.model} {bike.price}</li>)
    return(
        <>
        <ol>{list}</ol>
        </>
    )
}
export default Listitems