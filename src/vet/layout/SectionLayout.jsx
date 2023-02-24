

export const SectionLayout = ({ children, title }) => {
    return (
        <section className="section container">
            <h2 className="section__title">{title}</h2>
            {children}
        </section>
    )
}