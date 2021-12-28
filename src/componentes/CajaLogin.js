import React from 'react';
import style from '../estilos/CajaLogin.css';

class CajaLogin extends React.Component{
   render(){
       return (
           <div className='caja-login'>
               <div className='center-gridCajaLogin'>
                   <div className='text-titlebox'>
                       <h2>Iniciar Sesion</h2>
                   </div>

                   <div className='imput-userBox'>
                        <input type="text" placeholder="Nombre de Usuario" />
                   </div>

                   <div className='imput-passwordBox'>
                        <input type="password" placeholder="Contraseña" />
                   </div>

                   <div className='button-ingresoBox'>
                        <button>Ingresar</button>
                   </div>
                </div>       
               
           </div>
       )
   }
}
export default CajaLogin;