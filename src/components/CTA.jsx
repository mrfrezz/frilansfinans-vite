import useScrollAnimation from '../hooks/useScrollAnimation';

const CTA = () => {
    const [ref, isVisible] = useScrollAnimation(0.3);

    return (
        <section className="cta">
            <div className="container">
                <div
                    ref={ref}
                    className={`cta-content ${isVisible ? 'visible' : ''}`}
                >
                    <h2>Redo att ta kontrollen över ditt arbete?</h2>
                    <p>Skapa ett gratis konto på två minuter. Ingen bindningstid, inga startavgifter.</p>
                    <div className="cta-buttons">
                        <a href="https://konto.frilansfinans.se/register" className="btn btn-primary">Skapa konto gratis</a>
                        <a href="tel:+46771151000" className="btn btn-secondary">Ring oss: 0771-15 10 00</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
