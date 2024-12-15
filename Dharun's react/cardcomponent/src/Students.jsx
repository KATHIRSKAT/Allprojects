import PropTypes from "prop-types"
function Students(props)
{
    return(
        <>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.isEmployed? "Yes" : "No"}</p>
        </>
    )
}
Students.propTypes=
{
  name: PropTypes.string,
  age: PropTypes.number,
  isEmployed: PropTypes.bool
}
Students.defaultProps={
    name:"student",
    age:18,
    isEmployed: true
}
export default Students