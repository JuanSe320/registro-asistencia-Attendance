import React from 'react';
import styles from '../estilos/LoginUsers.css';
class LoginUsersSdt extends React.Component{
    
    render(){
        const {img,title}=this.props    
        return(

            <div className='loginUsers-box'>
               <div className='loginUsersAdm-box'> 
                    <div >
                    <img className='imageIconSize'  src= {img} alt={"img"}/>
                    </div>
                    <div>
                    <h1>Admin</h1>
                    </div>
               </div>
               <div className='loginUsersProf-box'> 
                    <div >
                    <img className='imageIconSize'  src= {img} alt={"img"}/>
                    </div>
                    <div>
                    <h1>Profesor</h1>
                    </div>
               </div>
               <div className='loginUsersStd-box'> 
                    <div >
                    <img className='imageIconSize'  src= {img} alt={"img"}/>
                    </div>
                    <div>
                    <h1>{title}</h1>
                    </div>
               </div>
            </div>
            

        )
    }

}

export default LoginUsersSdt