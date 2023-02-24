import { Link } from "react-router-dom"


export const Hero = () => {
    return (
        <div className="hero hero-home">
            <div className="container">
                <div className="copy">
                    <h1>¡Adopta una <br />mascota hoy!</h1>
                    <p>Busca en nuestra lista de mascotas <br />disponibles para adopción cerca de ti</p>
                    <Link className="button secondary" to="/mascotas">
                        Adopta Ahora
                    </Link>
                </div>
            </div>
        </div>
    )
}