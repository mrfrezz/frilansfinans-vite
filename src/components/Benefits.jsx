const Benefits = () => {
    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: 'Snabbast på marknaden',
            description: 'Lön inom 5 bankdagar – innan kunden ens har betalat. Med express får du pengarna inom 24 timmar.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            ),
            title: 'Försäkring ingår',
            description: 'Olycksfalls-, sjuk- och ansvarsförsäkring ingår i tjänsten. Du är skyddad från dag ett.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
            ),
            title: 'Tjänstepension automatiskt',
            description: 'Vi sätter av till din tjänstepension vid varje faktura. Din framtid är tryggad.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
            ),
            title: 'Personlig support',
            description: 'Branschens största rådgivningsteam finns här för dig. Ett samtal bort, aldrig längre.'
        }
    ];

    return (
        <section className="benefits" id="fordelar">
            <div className="container">
                <div className="section-header">
                    <h2>Allt du behöver. Inget du inte behöver.</h2>
                    <p>Vi har gjort det enkelt att vara egenanställd i över 25 år. Det märks.</p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div className="benefit-card" key={index}>
                            <div className="benefit-icon">
                                {benefit.icon}
                            </div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
