import '../styles/styles.scss';


export const AuthLayout = ({ children, title }) => {
    return (
        <div className='auth'>
            <div className="auth__card">
                <div className="left">
                    <h1>MedicVet Delgado</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit sed molestias temporibus fugiat, facilis est aut qui quasi accusamus.
                    </p>
                </div>
                <div className="right">
                    <h2>{title}</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}