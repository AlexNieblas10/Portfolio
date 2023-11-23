import { useEffect, useState } from "react"
import arrow from "../assets/arrow.svg"
import "../css/carrusel.css"

export const Carruselmagenes = ({ imagenes, link }) => {
	const [indexImage, setIndexImage] = useState(0)
	const [cambioImagenDerecha, setCambioImagenDerecha] = useState(false)
	const [cambioImagenIzquierda, setCambioImagenIzquierda] = useState(false)

	function imagenAnterior() {
		if (indexImage === 0) {
			setTimeout(() => {
				setIndexImage(imagenes.length - 1)
			}, 500)
		} else {
			setTimeout(() => {
				setIndexImage(indexImage - 1)
			}, 500)
		}
		setCambioImagenIzquierda(true)
	}

	function imagenSiguiente() {
		if (indexImage === imagenes.length - 1) {
			setTimeout(() => {
				setIndexImage(0)
			}, 500)
		} else {
			setTimeout(() => {
				setIndexImage(indexImage + 1)
			}, 500)
		}
		setCambioImagenDerecha(true)
	}

	useEffect(() => {
		if (cambioImagenDerecha) {
			setTimeout(() => {
				setCambioImagenDerecha(false)
			}, 1000)
		}
		if (cambioImagenIzquierda) {
			setTimeout(() => {
				setCambioImagenIzquierda(false)
			}, 1000)
		}
	}, [cambioImagenIzquierda, cambioImagenDerecha])

	return (
		<article className="containerCarrusel">
			<div className="containerImage">
				<div
					className="flechaIzquierdaContainer"
					onClick={(e) => imagenAnterior(e)}
				>
					<img
						id="flechaIzquierda"
						src={arrow}
						alt="Icono de la flecha para retroceder"
					/>
				</div>
				<a href={link} target="blank">
					<img
						className={`${cambioImagenDerecha ? "animationDerecha" : ""} ${
							cambioImagenIzquierda ? "animationIzquierda" : ""
						} imagenProyecto`}
						src={imagenes[indexImage]}
						href={"youtube.com"}
						alt="Imagen sobre el proyecto"
					/>
				</a>

				<div className="flechaDerechaContainer" onClick={imagenSiguiente}>
					<img
						id="flechaDerecha"
						src={arrow}
						alt="Icono de la flecha para avanzar"
					/>
				</div>
			</div>
		</article>
	)
}
