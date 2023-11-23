import { useState } from "react"
import { Header } from "./components/Header"
import { Tecnologias } from "./components/Tecnologias"
import { Proyectos } from "./components/Proyectos"
import moon from "./assets/moon.svg"
import sun from "./assets/sun.svg"
import "./css/app.css"
import { Social } from "./components/Social"

export function App() {
	const [darkMode, setDarkMode] = useState(false)

	function setMode() {
		setDarkMode(!darkMode)
	}

	return (
		<main id="main_container" className={darkMode ? "dark" : "light"}>
			<div id="app_container">
				<aside className="darkOrLightModeContainer">
					<img
						onClick={setMode}
						className="imageDarkOrLightMode"
						src={darkMode ? sun : moon}
					/>
				</aside>
				<Header darkMode={darkMode} setDarkMode={setDarkMode} />
				<Tecnologias dark={darkMode}/>
				<Proyectos dark={darkMode}/>
				<Social dark={darkMode}/>
			</div>
		</main>
	)
}
