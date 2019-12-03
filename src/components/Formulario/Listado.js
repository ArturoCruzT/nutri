import React from 'react';
import {Formulas} from "../../Data/Formulas";


const Listado = ({lang, onclick}) => {
	return (
		<div className="card card-body  m-0 p-0">
			<div className="card-header">
				{lang.get('formulario.formulas')}
			</div>
			<div className="card-body table-sm m-0 p-0">
				<table className="table table-bordered table-hover">
				{
					(Formulas).map( formula =>
						<tr className="cursor" onClick={()=>onclick(formula)}>
							<td>{formula.nombre}</td>
						</tr>
					)
				}
				</table>
			</div>
		</div>
	);
};

export default Listado;