

export const ContactCard = ({ title, message, assetIcon }) => {
    return (
        <div className="contact__box">
            <img src={`/assets/icons/${assetIcon}.svg`} alt={`${assetIcon} icono`} />
            <h4>{title}</h4>
            <p>{message}</p>
        </div>
    )
}