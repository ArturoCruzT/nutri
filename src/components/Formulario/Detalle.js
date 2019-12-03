import React from 'react';
import {FaChevronRight} from "react-icons/fa";

const Detalle = ({lang, formula}) => {
	return (
		<div className="card border-primary">
			<div className="card-header primary-color-dark">
				<span className="text-white">{formula.nombre}</span>
			</div>
			<div className="card-body">
			<span>
				<strong className="px-1">
					{lang.get('formulario.formula')} :
				</strong>
				{formula.valor}
			</span>
				<div>
					{(formula.consideraciones || []).map(consideracion =>
						<div className="d-flex justify-content-start">
							<div>
								<FaChevronRight/> <strong>{consideracion.nombre} :</strong>
							</div>
							<div>
								{consideracion.descripcion}
							</div>
						</div>)
					}
				</div>
			</div>
		</div>
	);
	
	
};

export default Detalle;