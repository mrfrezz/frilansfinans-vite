import { useState, useEffect } from 'react';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            {/* Parallax Background */}
            <div
                className="hero-parallax-bg"
                style={{ transform: `translateY(${scrollY * 0.4}px)` }}
            />
            <div className="hero-overlay" />

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12l2 2 4-4" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            Auktoriserat egenanställningsföretag
                        </div>

                        <h1>Fakturera utan företag. <span>Med full trygghet.</span></h1>

                        <p className="hero-description">
                            Du fokuserar på det du gör bäst. Vi tar hand om fakturor, skatter och pension.
                            Hos oss är du egen – aldrig ensam.
                        </p>

                        <div className="hero-cta">
                            <a href="https://konto.frilansfinans.se/register" className="btn btn-primary">Skapa konto gratis</a>
                            <a href="#hur-fungerar" className="btn btn-secondary">Se hur det fungerar</a>
                        </div>

                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-number">150 000+</div>
                                <div className="stat-label">Egenanställda</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">25 år</div>
                                <div className="stat-label">Av erfarenhet</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">5 dagar</div>
                                <div className="stat-label">Till lön utbetald</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="floating-element top-left">
                            <div className="floating-icon green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                            <div className="floating-text">
                                Faktura skickad
                                <span>Just nu</span>
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="hero-card-header">
                                <div>
                                    <div className="hero-card-title">Din lön</div>
                                    <div className="hero-card-amount">12 450 kr</div>
                                </div>
                                <div className="hero-card-badge">Inom 5 dagar</div>
                            </div>

                            <div className="hero-card-breakdown">
                                <div className="breakdown-item">
                                    <div className="breakdown-label">
                                        <div className="breakdown-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="6" width="18" height="12" rx="2" />
                                                <path d="M3 10h18" />
                                            </svg>
                                        </div>
                                        <span>Tjänstepension</span>
                                    </div>
                                    <span className="breakdown-value">+ 752 kr</span>
                                </div>

                                <div className="breakdown-item">
                                    <div className="breakdown-label">
                                        <div className="breakdown-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                                            </svg>
                                        </div>
                                        <span>Försäkringar</span>
                                    </div>
                                    <span className="breakdown-value">Ingår</span>
                                </div>

                                <div className="breakdown-item">
                                    <div className="breakdown-label">
                                        <div className="breakdown-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                                                <path d="M12 17h.01" />
                                            </svg>
                                        </div>
                                        <span>Personlig rådgivning</span>
                                    </div>
                                    <span className="breakdown-value">Ingår</span>
                                </div>
                            </div>
                        </div>

                        <div className="floating-element bottom-right">
                            <div className="floating-icon coral">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                                </svg>
                            </div>
                            <div className="floating-text">
                                Lön utbetald!
                                <span>12 450 kr</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
