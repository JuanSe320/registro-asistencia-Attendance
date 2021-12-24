import React from 'react';
import { BrowserRouter, Route,Routes,link } from 'react-router-dom';
import PaginaInicio from '../pagina/PaginaInicio';
import PaginaAdm from '../pagina/PaginaAdm';
import PaginaProf from '../pagina/PaginaProf';
import PaginaStd from '../pagina/PaginaStd';


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PaginaInicio />}/>
                <Route exact path="/Adm" element={<PaginaAdm />}/>
                <Route exact path="/Prof" element={<PaginaProf />}/>
                <Route exact path="/Std" element={<PaginaStd />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App