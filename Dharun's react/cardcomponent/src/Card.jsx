import profile from "./profile.jpg"
function Card()
{
    return(
        <>
        <div className="Card-container">
        <img className="card-img" src={profile}></img>
        <h1 className="name">Tiger</h1>
        <p className="descripition">national animal of india,it is a carnivorse</p>
        </div>
        </>
    )
}
export default Card