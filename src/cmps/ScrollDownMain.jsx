export function ScrollDownMain({ link, isLast }) {

    return (
        <section className={`scroll-down-main`} >
            <a href={link}>
                <div className={`down-scroll-section ${isLast ? 'last' : ''}`}></div>
            </a>
        </section>
    )
}