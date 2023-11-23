import social from "../assets/social.svg"
import { IconSocial } from "./IconSocial"
import github from "../assets/github.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import email from "../assets/email.svg"
import "../css/social.css"

export const Social = ({dark}) => {
	return (
		<section>
			<h2 className="title">
				Social
				<img
					className="image"
					src={social}
					alt="Icono de unas personas para decorar"
				/>
			</h2>

			<article className="iconsContainer">
				<IconSocial dark={dark} icon={github} name={"GitHub"} color={"rgb(22, 22, 20)"} link={"https://github.com/AlexNieblas10"}/>
				<IconSocial dark={dark} icon={twitter} name={"Twitter"} color={"rgb(77, 169, 235)"} link={"https://twitter.com/alexnieblasm"}/>
				<IconSocial dark={dark} icon={linkedin} name={"LinkedIn"} color={"rgb(42, 100, 149)"} link={"https://www.linkedin.com/in/alex-nieblas-moreno-a90818235/"}/>
				<IconSocial dark={dark} icon={email} name={"Contacto"} color={"rgb(102, 151, 224)"} link={"mailto:elalexnieblas@gmail.com"}/>
			</article>
		</section>
	)
}
