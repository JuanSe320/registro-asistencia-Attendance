import React from 'react';
import loginIcon from '../img/loginImg1';

class LoginUsers extends React.Component{
    render(){
        return(

            <div>
                <div>
                 <img src= {loginIcon} alt={"img"}/>
                </div>
                <div>
                   <h1>Estudiantes</h1>
                </div>
            </div>
            

        )
    }

}

export default LoginUsers