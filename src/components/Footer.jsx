const Footer = () => {
    return (
        <footer className="footer" id="kontakt">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="/" className="logo">
                            <img src="/assets/logo-white.svg" alt="Frilans Finans" />
                        </a>
                        <p>Sveriges ledande egenanställningsföretag sedan 1999. Vi gör det möjligt att fakturera utan eget företag – enkelt, tryggt och med full support.</p>
                    </div>

                    <div>
                        <h4>Fakturera</h4>
                        <ul>
                            <li><a href="#">Så fungerar det</a></li>
                            <li><a href="#">Räkna ut lön</a></li>
                            <li><a href="#">Försäkringar</a></li>
                            <li><a href="#">Lojalitetsprogram</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Om oss</h4>
                        <ul>
                            <li><a href="#">Om Frilans Finans</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Lediga tjänster</a></li>
                            <li><a href="#">Kontakta oss</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Kontakt</h4>
                        <ul>
                            <li><a href="mailto:info@frilansfinans.se">info@frilansfinans.se</a></li>
                            <li><a href="tel:+46771151000">0771-15 10 00</a></li>
                            <li>Vardagar 09:00-17:00</li>
                            <li>Söndagar 15:00-20:00</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Frilans Finans Sverige AB. Alla rättigheter förbehållna.</p>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/FrilansFinans/" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/frilans-finans-sverige-ab" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/frilansfinans/" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
