import { Link } from 'react-router-dom';
import { featureCards } from '../data/siteContent';

function FeaturesPage() {
    return (
        <main className="page-content">
            <section className="section narrow-page">
                <div className="container center-copy">
                    <div className="eyebrow">Features</div>
                    <h1>Built to help every team move faster.</h1>
                    <p>
                        From planning to reporting, Northstar gives your team one clear place to align work,
                        automate follow-ups, and stay on top of what matters.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container feature-grid feature-page-grid">
                    {featureCards.map((feature) => (
                        <article className="feature-card" key={feature.title}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section cta-panel">
                <div className="container simple-cta">
                    <h2>Ready to simplify operations?</h2>
                    <Link to="/pricing" className="primary-button large">
                        Explore pricing
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default FeaturesPage;
