import avatar from "../assets/avatar.svg"
import cv from "../assets/cv.svg"
import "../css/header.css"

export const Header = ({ darkMode }) => {
	return (
		<section className="header">
			<figure className="imagenContainer">
				<img className="imagen" src={avatar} alt="Imagen de presentacion" />
			</figure>
			<aside className="informacionContainer">
				<div className="textos">
					<h1 id="textoNombre">Alex Nieblas</h1>
					<h2 id="textoPuesto" className={darkMode ? "dark" : "light"}>
						Me gusta mucho aprender sobre la tecnología y ponerla en práctica
					</h2>
				</div>

				<a
					href="/src/assets/curriculumAlex.pdf"
					className="downloadCv"
					download="curriculumAlex.pdf"
				>
					<div className={`${darkMode ? "dark" : ""} cvContainer`}>
						<img className="cv" src={cv} alt="Icono para mostrar mi cv" />
						<p className="curriculumTitle">CV</p>
					</div>
				</a>
			</aside>
		</section>
	)
}
