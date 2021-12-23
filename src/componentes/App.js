import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PaginaInicio from '../pagina/PaginaInicio';
import PaginaStd from '../pagina/PaginaStd';
function App(){
    return(
        <BrowserRouter>
            <Route path="/Inicio" component={PaginaInicio}/>
            <Route path="/Inicio/Std" component={PaginaStd}/>
        </BrowserRouter>
    )
}

export default App