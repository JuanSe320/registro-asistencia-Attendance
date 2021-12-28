import React from "react";
import Header from "../componentes/Header";
import CajaLogin from "../componentes/CajaLogin";

class PaginaLogin extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <CajaLogin />
            </div>
        ) 
    }

}

export default PaginaLogin