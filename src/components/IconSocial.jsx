import "../css/iconSocial.css"

export const IconSocial = ({ icon, name, color, link, dark }) => {
	return (
		<a href={link} className={`${dark ? "dark" : ""} link`} target="blank">
			<div className="iconContainer">
				<img className="imageIcon" src={icon} alt="Icono de la red social" />
				<h3 className="nameIcon" style={{ color: `${color}` }}>
					{name}
				</h3>
			</div>
		</a>
	)
}
