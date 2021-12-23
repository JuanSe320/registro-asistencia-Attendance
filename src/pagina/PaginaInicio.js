
import React from 'react';
import Header from '../componentes/Header';
import LoginUsers from '../componentes/LoginUsers';
import img1 from '../img/loginImg1.png';

class PaginaInicio extends React.Component{
   render(){
        return(
            <div>
                <Header />
                <LoginUsers 
                title="Estudiantes"
                img = {img1}
                 />
    
            </div>
        )

   } 
    
}
export default PaginaInicio