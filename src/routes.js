import Home from "./components/template/Home";
import Formulario from "./components/Formulario/Formulario";

const ROUTES = [
    { path: '/formulario', component: Formulario },
    { exact: true, path: '/', component: Home },
    
];

export default ROUTES;