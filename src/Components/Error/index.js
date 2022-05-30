import React from "react";
import PropTypes from "prop-types";

const Error =({message})=>{
return <div style={{
      width:'200px', 
      height:'auto',
      margin:'.2em auto',
      textAlign:'center'
      }}>
    {message}
</div>
}

Error.prototype={
    message: PropTypes.string,
}

Error.defaultProp={
    message:'An error occurred',
}

export default Error;