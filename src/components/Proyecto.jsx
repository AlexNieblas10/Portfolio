import "../css/proyecto.css"
import { Carruselmagenes } from "./Carruselmagenes"

export const Proyecto = ({
	tecnologias,
	imagenes,
	link,
	title,
	description,
	dark,
}) => {
	return (
		<article className="proyectoContainer">
			<Carruselmagenes imagenes={imagenes} link={link} />

			<aside className="informacionProyectoContainer">
				<h2 className={`${dark ?"dark" :""} tituloProyecto`}>{title}</h2>

				<p className={`${dark ?"dark" :""} parrafoDescriptivo`}>{description}</p>

				<ul className="tecnologiasUtilizadas">
					{tecnologias.map((tecnologia) => {
						return (
							<li className="iconoTecnologiaContainer" key={tecnologia}>
								<img
									className="iconoTecnologia"
									src={tecnologia}
									alt="Icono sobre la tecnología que se usó"
								/>
							</li>
						)
					})}
				</ul>
			</aside>
		</article>
	)
}
