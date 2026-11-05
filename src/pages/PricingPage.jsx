import { Link } from 'react-router-dom';
import { plans } from '../data/siteContent';

function PricingPage() {
    return (
        <main className="page-content">
            <section className="section narrow-page">
                <div className="container center-copy">
                    <div className="eyebrow">Pricing</div>
                    <h1>Choose a plan that grows with your team.</h1>
                    <p>
                        Start lean, scale fast, and give every team the visibility they need to move with more confidence.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container pricing-grid">
                    {plans.map((plan) => (
                        <article key={plan.name} className={`price-card ${plan.featured ? 'featured' : ''}`}>
                            <div className="tag">{plan.name}</div>
                            <h3>
                                {plan.price}
                                {plan.suffix ? <span>{plan.suffix}</span> : null}
                            </h3>
                            <p>{plan.description}</p>
                            <ul>
                                {plan.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <Link
                                to="/"
                                className={plan.featured ? 'primary-button full-width' : 'secondary-button full-width'}
                            >
                                {plan.buttonText}
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default PricingPage;
