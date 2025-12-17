const Testimonials = () => {
    const testimonials = [
        {
            text: '"Äntligen kan jag fokusera på det jag är bra på istället för bokföring och administration. Frilans Finans gör allt så enkelt."',
            initials: 'ML',
            name: 'Maria L.',
            role: 'Fotograf, Stockholm'
        },
        {
            text: '"Snabb utbetalning och otroligt bra support. Känns tryggt att veta att allt sköts korrekt med skatter och pension."',
            initials: 'EK',
            name: 'Erik K.',
            role: 'IT-konsult, Göteborg'
        },
        {
            text: '"Perfekt för mig som gör extrajobb vid sidan av studier. Inget krångel, bara fakturera och få betalt."',
            initials: 'SA',
            name: 'Sara A.',
            role: 'Webbutvecklare, Malmö'
        }
    ];

    const StarIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>150 000 frilansare kan inte ha fel</h2>
                    <p>Läs vad våra egenanställda tycker om att fakturera genom Frilans Finans.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} />
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{testimonial.initials}</div>
                                <div className="testimonial-info">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
