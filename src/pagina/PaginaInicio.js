
import React from 'react';
import Header from '../componentes/Header';
import LoginUsersSdt from '../componentes/LoginUsers';

import img1 from '../img/loginImg1.png';

class PaginaInicio extends React.Component{
   render(){
        return(
            <div>
                <Header />
                <LoginUsersSdt 
                title="Estudiantes"
                img = {img1}
                 />
    
            </div>
        )

   } 
    
}
export default PaginaInicio