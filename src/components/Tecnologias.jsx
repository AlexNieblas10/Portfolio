import { Tecnologia } from "./Tecnologia"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import tailwind from "../assets/tailwind.svg"
import javascript from "../assets/javascript.svg"
import react from "../assets/react.svg"
import git from "../assets/git.svg"
import github from "../assets/github.svg"
import node from "../assets/node.svg"
import mysql from "../assets/mysql.svg"
import python from "../assets/python.svg"
import terminal from "../assets/terminal.svg"
import computer from "../assets/tic-computer.svg"
import "../css/tecnologias.css"

export const Tecnologias = ({dark}) => {
	return (
		<section className="container">
			<h2 className="title">
				Tecnologías
				<img className="image" src={computer} alt="Icono de una computadora para decorar" />
			</h2>
			<aside className="tecnologiasContainer">
				<Tecnologia dark={dark} title={"HTML"} image={html} />
				<Tecnologia dark={dark} title={"CSS"} image={css} />
				<Tecnologia dark={dark} title={"Tailwind"} image={tailwind} />
				<Tecnologia dark={dark} title={"JavaScript"} image={javascript} />
				<Tecnologia dark={dark} title={"React"} image={react} />
				<Tecnologia dark={dark} title={"Node.js"} image={node} />
				<Tecnologia dark={dark} title={"Python"} image={python} />
				<Tecnologia dark={dark} title={"MySQL"} image={mysql} />
				<Tecnologia dark={dark} title={"Git"} image={git} />
				<Tecnologia dark={dark} title={"GitHub"} image={github} />
				<Tecnologia dark={dark} title={"Terminal"} image={terminal} />

			</aside>
		</section>
	)
}
