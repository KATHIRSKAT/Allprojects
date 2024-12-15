
import PropTypes from "prop-types"
function Cr(props)
{
    const greet=<h2 style={{backgroundColor:"green"}}>Welcome</h2>
    const bye=<h2 style={{backgroundColor:"red"}}>Welcome</h2>
    return(props.isEmpty? greet : bye
    )
}
export default Cr
Cr.propTypes={
    isEmpty:PropTypes.bool 
}
Cr.defaultProps={
    isEmpty:true
}
