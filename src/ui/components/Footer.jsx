import '../styles/styles.scss';


export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="footer section">
            <div className="container footer__items">
                <a className="footer__brand" href="#">MedicVet Delgado</a>
                <p>Todos los derechos reservados Copyright &copy; {year}</p>
            </div>
        </footer>
    )
}