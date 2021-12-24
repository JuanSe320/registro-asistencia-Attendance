import React from 'react';
import Styles from '../estilos/LoginUsers.css' ;
import {Link} from 'react-router-dom'
class LoginUsers extends React.Component{
    
    render(){
        const {img,title}=this.props    
        return(

            <div className='loginUsers-box'>
               <div className='loginUsersAdm-box'> 
                    <div className='centerImageIcon-box'>
                        <Link to= "/Adm">   
                            <img className='imageIconSize'  src= {img} alt={"img"}/>
                        </Link>
                    </div>
                    
                    <div className='alingText'>
                    <h1>Admin</h1>
                    </div>
               </div>
               <div className='loginUsersProf-box'> 
                    <div className='centerImageIcon-box'>
                        <Link to= "/Prof">   
                            <img className='imageIconSize'  src= {img} alt={"img"}/>
                        </Link>
                    </div>
                    <div className='alingText'>
                    <h1>Profesor</h1>
                    </div>
               </div>
               <div className='loginUsersStd-box'> 
                    <div className='centerImageIcon-box'>
                    <   Link to= "/Std">   
                            <img className='imageIconSize'  src= {img} alt={"img"}/>
                        </Link>
                    </div>
                    <div className='alingText'>
                    <h1>{title}</h1>
                    </div>
               </div>
            </div>
            

        )
    }

}

export default LoginUsers