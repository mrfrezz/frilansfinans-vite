import { useState, useCallback, useEffect, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Calculator = () => {
    const [invoiceAmount, setInvoiceAmount] = useState(25000);
    const [isUpdating, setIsUpdating] = useState(false);
    const [headerRef, headerVisible] = useScrollAnimation();
    const [cardRef, cardVisible] = useScrollAnimation(0.2);
    const timeoutRef = useRef(null);

    const calculateSalary = useCallback((amount) => {
        // Simplified calculation: 
        // Fee: 6%, Tax: ~30%, Employer contribution: ~31.42%
        const fee = amount * 0.06;
        const afterFee = amount - fee;
        const employerContribution = afterFee * 0.3142;
        const grossSalary = afterFee - employerContribution;
        const incomeTax = grossSalary * 0.30;
        const netSalary = grossSalary - incomeTax;

        return Math.round(netSalary);
    }, []);

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    const triggerUpdateAnimation = useCallback(() => {
        setIsUpdating(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsUpdating(false), 300);
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\s/g, '');
        const numValue = parseInt(value) || 0;
        // Clamp between 0 and 1000000
        const clampedValue = Math.max(0, Math.min(1000000, numValue));
        setInvoiceAmount(clampedValue);
        triggerUpdateAnimation();
    };

    const handleSliderChange = (e) => {
        setInvoiceAmount(parseInt(e.target.value));
        triggerUpdateAnimation();
    };

    const resultAmount = calculateSalary(invoiceAmount);

    return (
        <section className="calculator" id="kalkylator">
            <div className="container">
                <div className="calculator-wrapper">
                    <div
                        ref={headerRef}
                        className={`calculator-text ${headerVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
                    >
                        <h2>Se vad du får ut</h2>
                        <p>Räkna enkelt ut vad som landar på ditt konto efter skatt och avgifter. Inga överraskningar, inga dolda kostnader.</p>

                        <div className="calculator-features">
                            <div className="calc-feature">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                                <span>4-6% avgift – allt inkluderat</span>
                            </div>
                            <div className="calc-feature">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                                <span>Sänkt avgift genom lojalitetsprogrammet Together</span>
                            </div>
                            <div className="calc-feature">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                                <span>Pension och försäkring ingår</span>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={cardRef}
                        className={`calculator-card ${cardVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
                    >
                        <div className="calc-input-group">
                            <label className="calc-label" htmlFor="invoiceAmount">Fakturabelopp (exkl. moms)</label>
                            <div className="calc-input-wrapper">
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    className="calc-input"
                                    id="invoiceAmount"
                                    value={formatNumber(invoiceAmount)}
                                    onChange={handleInputChange}
                                    aria-describedby="calc-result-label"
                                />
                                <span className="calc-suffix">kr</span>
                            </div>
                            <input
                                type="range"
                                className="calc-slider"
                                min="0"
                                max="200000"
                                step="1000"
                                value={invoiceAmount}
                                onChange={handleSliderChange}
                                aria-label="Fakturabelopp slider"
                            />
                        </div>

                        <div className="calc-result">
                            <div className="calc-result-label" id="calc-result-label">Din uppskattade nettolön</div>
                            <div className={`calc-result-amount ${isUpdating ? 'updating' : ''}`}>
                                {formatNumber(resultAmount)} kr
                            </div>
                            <div className="calc-result-sub">+ pension och försäkring</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
