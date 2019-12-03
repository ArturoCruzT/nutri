import React, {useState} from 'react';
import Template from "../template/Template";
import * as langIndex from "../../lang";
import Listado from "./Listado";
import Detalle from "./Detalle";

const Formulario = () => {
	const [lang, setLang] = useState({get: (key) => key});
	const [lang_ok, setLangOk] = useState(false);
	const [formula, setFormula] = useState({});
	
	const consultaLang = () => {
		langIndex.cargarLang((result) => {
			setLang(langIndex);
			setLangOk(true);
		});
	};
	
	if (!lang_ok) {
		consultaLang();
	}
	return (
		<Template lang={lang} lang_ok={lang_ok}>
			<div className="d-flex justify-content-around py-5">
				<div>
					<Listado lang={lang} onclick={setFormula}/>
				</div>
				<Detalle lang={lang} formula={formula}/>
			</div>
		</Template>
	);
};

export default Formulario;