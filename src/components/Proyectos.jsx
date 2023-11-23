import proyectos from "../assets/proyectos.svg"
import "../css/proyectos.css"
import { Proyecto } from "./Proyecto"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"
import javascript from "../assets/javascript.svg"
import node from "../assets/node.svg"
import mysql from "../assets/mysql.svg"
import css from "../assets/css.svg"
import html from "../assets/html.svg"
import obrechat1 from "../assets/images/ObreChat1.png"
import obrechat2 from "../assets/images/ObreChat2.png"
import obrechat3 from "../assets/images/ObreChat3.png"
import todos1 from "../assets/images/todos1.png"
import todos2 from "../assets/images/todos2.png"
import weather1 from "../assets/images/weather1.png"
import weather2 from "../assets/images/weather2.png"
import weather3 from "../assets/images/weather3.png"
import connectFour1 from "../assets/images/connectFour1.png"
import connectFour2 from "../assets/images/connectFour2.png"
import connectFour3 from "../assets/images/connectFour3.png"

export const Proyectos = ({ dark }) => {
	return (
		<section className=" container">
			<h2 className="title">
				Proyectos
				<img
					className="image"
					src={proyectos}
					alt="Icono de una imagen descriptiva para decorar"
				/>
			</h2>
			<aside className="proyectosContainer">
				<Proyecto
					tecnologias={[tailwind, javascript, node, react, mysql]}
					imagenes={[obrechat1, obrechat2, obrechat3]}
					link={"https://obre-blog.vercel.app/"}
					title={"ObreChat"}
					description={
						"Una página web llamada ObreChat en la cual puedes entrar a postear tus ideas u opiniones acerca de diferentes categorías añadidas"
					}
					dark={dark}
				/>
				<Proyecto
					tecnologias={[css, javascript, react]}
					imagenes={[todos1, todos2]}
					link={"https://to-dos-beta.vercel.app/"}
					title={"To-Do App"}
					description={
						"Página para poder escribir tus pendientes y conforme los termines marcarlos como completados o eliminarlos"
					}
					dark={dark}
				/>
				<Proyecto
					tecnologias={[html, css, react, javascript]}
					imagenes={[weather1, weather2, weather3]}
					link={"https://weather-app-beta-lake.vercel.app/"}
					title={"Weather app"}
					description={
						"Página para poder ver la temperatura y más cosas de la dirección que des; este proyecto usa la API de tomorrow.io"
					}
					dark={dark}
				/>
				<Proyecto
					tecnologias={[css, javascript, react]}
					imagenes={[connectFour1, connectFour2, connectFour3]}
					link={"https://connect-4-eight.vercel.app/"}
					title={"Connect 4"}
					description={
						"El clásico conecta 4 adaptado para web (solo para pantallas anchas) igual de divertido que siempre"
					}
					dark={dark}
				/>
			</aside>
		</section>
	)
}
