import '../styles/styles.scss';


export const Loader = () => {
    return (
        <div className="spinner__container">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    )
}