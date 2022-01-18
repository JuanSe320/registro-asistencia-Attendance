import React from 'react';
import { BrowserRouter, Route,Routes,link } from 'react-router-dom';
import PaginaInicio from '../pagina/PaginaInicio';
import PaginaAdm from '../pagina/PaginaAdm';
import PaginaProf from'../pagina/PaginaProf';
import PaginaStd from '../pagina/PaginaStd';
import NotFound from '../pagina/NotFound';
import PaginaLogin from '../pagina/PaginaLogin';



function App(){
    return(
        <BrowserRouter basename='/registro-asistencia-attendance'>
            <Routes>
                <Route exact path="/login/Adm" element={<PaginaAdm />}/>
                <Route exact path="/login" element={<PaginaLogin />} />
                <Route exact path="/login/Prof" element={<PaginaProf/>}/>
                <Route exact path="/login/Std" element={<PaginaStd />}/>
                <Route exact path="/" element={<PaginaInicio />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App