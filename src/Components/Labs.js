import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate();

    function clickhandler(){
        // we have to enter our desired path here
        navigate("/")
    }
    
    function backhandler(){
        navigate(-1)
    }
  return (
    <div>
        <div>Labs</div>
        <button onClick={clickhandler} >Move to Home</button>
        <button onClick={backhandler}>Go Back</button>
    </div>

    
  )
}

export default Labs