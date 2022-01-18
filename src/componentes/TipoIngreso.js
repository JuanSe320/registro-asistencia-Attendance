import React from 'react';
import Styles from '../estilos/TipoIngreso.css' ;
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {faUserTie} from "@fortawesome/free-solid-svg-icons";
import {faUserCog} from "@fortawesome/free-solid-svg-icons";


class TipoIngreso extends React.Component{
    
    render(){
        const {img,title}=this.props    
        return(

            <div className='loginUsers-box'>
               <div className='loginUsersAdm-box'> 
                    <div className='centerImageIcon-box'>
                        <Link to= "/login">   
                            <FontAwesomeIcon className='iconSize' icon={faUserCog}/>
                        </Link>
                    </div>
                    
                    <div className='alingText'>
                    <h1>Admin</h1>
                    </div>
               </div>
               <div className='loginUsersProf-box'> 
                    <div className='centerImageIcon-box'>
                        <Link to= "/login">   
                            <FontAwesomeIcon className='iconSize' icon={faUserTie}/>
                        </Link>
                    </div>
                    <div className='alingText'>
                    <h1>Profesor</h1>
                    </div>
               </div>
               <div className='loginUsersStd-box'> 
                    <div className='centerImageIcon-box'>
                        <Link to= "/login">   
                            <FontAwesomeIcon className='iconSize' icon={faGraduationCap}/>  
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

export default TipoIngreso