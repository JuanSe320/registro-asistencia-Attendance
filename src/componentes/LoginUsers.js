import React from 'react';
import styles from '../estilos/LoginUsers.css';
class LoginUsers extends React.Component{
    
    render(){
        const {img,title}=this.props    
        return(

            <div className='loginUser-box'>
                <div >
                 <img className='imageIconSize'  src= {img} alt={"img"}/>
                </div>
                <div>
                   <h1>{title}</h1>
                </div>
            </div>
            

        )
    }

}

export default LoginUsers