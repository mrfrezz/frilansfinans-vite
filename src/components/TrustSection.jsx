import useScrollAnimation from '../hooks/useScrollAnimation';

const TrustSection = () => {
    const [ref, isVisible] = useScrollAnimation(0.3);

    return (
        <section className="trust-section">
            <div className="container">
                <div
                    ref={ref}
                    className={`trust-inner ${isVisible ? 'visible' : ''}`}
                >
                    <div className="trust-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span>Auktoriserat av EAFA</span>
                    </div>
                    <div className="trust-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                        </svg>
                        <span>Kollektivavtal via Uppdragsarbetarförbundet</span>
                    </div>
                    <div className="trust-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" />
                            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                        </svg>
                        <span>Tjänstepension hos SPP</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
