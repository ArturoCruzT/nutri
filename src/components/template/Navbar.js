import React from 'react';
import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {
    FaHome,
    FaAddressBook,
    FaCity,
    FaDollarSign,
    FaCompress,
    FaCalendar,
    FaList,
    FaSearch,
    FaClipboardCheck,
    FaBuffer,
    FaUserShield,
    FaTruckMoving
} from "react-icons/fa";
import {AiFillBank} from "react-icons/ai"
import {IoIosPaper} from "react-icons/io";

function Navbar({lang, lang_ok}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark warning-color-dark py-0 text-small">
            <NavLink to="/" className="nav-link navbar-brand" href="#"><span>
                <FaHome/>
                {` ${process.env.REACT_APP_APP_NAME}`}
                <Env env={process.env.REACT_APP_ENV}/>
            </span></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#link"
                                 to="/pedido/captura">
                            <IoIosPaper/>
                            <span className="py-1">  {lang.get('navbar.capturaPedido')}  </span>
                        </NavLink>
                    </li>
                    : ''
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FaSearch/>
                            <span className="py-1">   {lang.get('navbar.consulta')} </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right text-small "
                             aria-labelledby="navbarDropdown">

                            <NavLink className="dropdown-item"
                                     to="/consulta/listado"><FaList/><span
                                className="ml-2">{lang.get('navbar.listado')}</span></NavLink>

                            <NavLink className="dropdown-item"
                                     to="/consulta/calendario"><FaCalendar/><span
                                className="ml-2">{lang.get('navbar.calendario')}</span></NavLink>

                        </div>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FaCompress/>
                            <span className="py-1">   {lang.get('navbar.operaciones')} </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right text-small "
                             aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item"
                                     to="/autorizacion/pendientes"><FaUserShield/> {lang.get('navbar.autorizacion')}
                            </NavLink>

                            <NavLink className="dropdown-item"
                                     to="/pedido/asignacionDatos"><FaBuffer/> {lang.get('navbar.asignacionDatos')}
                            </NavLink>

                            <NavLink className="dropdown-item"
                                     to="/pedido/asignacionLotes"><FaBuffer/> {lang.get('navbar.asignacionLotes')}
                            </NavLink>

                            <NavLink className="dropdown-item"
                                     to="/pedido/liberacion"><FaClipboardCheck/> {lang.get('navbar.liberacion')}
                            </NavLink>
                            <NavLink className="dropdown-item"
                                     to="/pedido/facturar"><AiFillBank/> {lang.get('navbar.facturacion')}</NavLink>

                            <NavLink className="dropdown-item"
                                     to="/pedido/embarque"><FaTruckMoving/> {lang.get('navbar.embarque')}</NavLink>
                        </div>
                    </li>

                </ul>
                <ul className="navbar-nav navbar-right ">

                </ul>
            </div>
        </nav>
    );
};

const Env = ({env}) => {
    if (env != 'prod') {
        const tipo_badge = env === 'dev' ? 'warning' : 'danger';
        return (
            <span className={`p-1 ml-1 badge badge-${tipo_badge}`}>{env}</span>
        );
    }
    return ('');
};

export default Navbar;
