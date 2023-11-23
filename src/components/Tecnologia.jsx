import "../css/tecnologia.css"

export const Tecnologia = ({ title, image, dark }) => {
	return (
		<div className="containerTecnologia">
			<div className="containerIconTecnologia">
				<img
					className="iconTecnologia"
					src={image}
					alt="imagen de la tecnología"
				/>
			</div>
			<h3 id="title" className={dark ?"dark" :""}>{title}</h3>
		</div>
	)
}
