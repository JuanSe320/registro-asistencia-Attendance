import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/Header';
import LoginUsers from './componentes/LoginUsers';
import img1 from './img/loginImg1.png';

/* 
 *  @decs render the app
 */
ReactDOM.render(<div>
                    <Header />
                    <LoginUsers 
                        title="Estudiantes"
                        img = {img1}
                    />
                    
                </div>, document.getElementById('root'));