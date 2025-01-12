import React from "react";
import './Company.css';
import { BsChevronLeft } from "react-icons/bs";
import Filter from "../Filter/Filter";
import FilterGroup from "../FilterGroup/FilterGroup";

const Company = () =>{
    const styles = {color:"#E51E62",boxShadow: "0 0 0 0.2px #E51E62, 3px 3px 0px rgba(32, 115, 243, 0.4)"};
    const clickStyles = {backgroundColor:"#E35A89"};
    return(
        <div className="px-9 company-main">
            <div className="header">
                <h3>Banco Falabella</h3>
                <p>Mercado Fianciero</p>
                <p>Sitio web oficial: www.bancofalabella.cl</p>
                <div className="volver"> <BsChevronLeft size={"1em"}/> volver</div>
            </div>
            <div className="body text-center">
                <h4 className="my-4">Reclamos Tramitados</h4>
                <FilterGroup>
                    <Filter>
                    <span>En 2021-2023</span>
                    </Filter>
                    <Filter>
                    <span>En 2024</span>
                    </Filter>
                    <Filter>
                    <span>En mayo</span>
                    </Filter>
                    <Filter styles={styles} clickStyles={clickStyles}>
                    <span>Último Cyber</span>
                    </Filter>
                </FilterGroup>
            </div>
        </div>
    );
}

export default Company;