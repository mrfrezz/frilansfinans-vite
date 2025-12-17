import useScrollAnimation from '../hooks/useScrollAnimation';

const HowItWorks = () => {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [stepsRef, stepsVisible] = useScrollAnimation(0.2);

    return (
        <section className="how-it-works" id="hur-fungerar">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`section-header ${headerVisible ? 'visible' : ''}`}
                >
                    <h2>Så enkelt kommer du igång</h2>
                    <p>Tre steg är allt som krävs för att fakturera som privatperson. Du behöver inget företag, ingen F-skatt.</p>
                </div>

                <div
                    ref={stepsRef}
                    className={`steps ${stepsVisible ? 'visible' : ''}`}
                >
                    <div className="step">
                        <div className="step-number">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <line x1="20" y1="8" x2="20" y2="14" />
                                <line x1="23" y1="11" x2="17" y2="11" />
                            </svg>
                        </div>
                        <h3>1. Skapa konto gratis</h3>
                        <p>Det tar två minuter och kostar ingenting. Du binder dig inte till något.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                        </div>
                        <h3>2. Registrera uppdraget</h3>
                        <p>Lägg in kunden och beloppet. Vi skapar fakturan och skickar den åt dig.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" />
                                <line x1="1" y1="10" x2="23" y2="10" />
                            </svg>
                        </div>
                        <h3>3. Få lön inom 5 dagar</h3>
                        <p>Pengarna landar på ditt konto – skatt och avgifter redan betalda.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
