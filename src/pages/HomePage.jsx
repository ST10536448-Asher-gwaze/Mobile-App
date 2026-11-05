import { Link } from 'react-router-dom';
import { featureCards, logos, plans, testimonials } from '../data/siteContent';

function HomePage() {
    return (
        <main>
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="eyebrow">Built for high-performing teams</div>
                        <h1>Turn strategy into momentum.</h1>
                        <p>
                            Unify marketing, sales, and operations in one workspace where work flows,
                            insights surface instantly, and your team moves faster than the market.
                        </p>

                        <div className="cta-row">
                            <Link to="/pricing" className="primary-button large">
                                Get started
                            </Link>
                            <Link to="/solutions" className="secondary-button large">
                                Watch demo
                            </Link>
                        </div>

                        <div className="social-proof">
                            <div>
                                <strong>18k+</strong>
                                <span>teams onboarded</span>
                            </div>
                            <div>
                                <strong>4.9/5</strong>
                                <span>average rating</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual" aria-label="Product dashboard preview">
                        <div className="dashboard-card main-card">
                            <div className="card-header">
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="pill success">+24.8%</span>
                            </div>

                            <div className="chart-panel">
                                <div className="chart-bars" aria-hidden="true">
                                    <span style={{ height: '28%' }}></span>
                                    <span style={{ height: '38%' }}></span>
                                    <span style={{ height: '50%' }}></span>
                                    <span style={{ height: '72%' }}></span>
                                    <span style={{ height: '80%' }}></span>
                                    <span style={{ height: '90%' }}></span>
                                    <span style={{ height: '72%' }}></span>
                                    <span style={{ height: '100%' }}></span>
                                </div>
                            </div>

                            <div className="mini-row">
                                <div className="stat-box">
                                    <span className="label">Revenue</span>
                                    <strong>$128.4k</strong>
                                </div>
                                <div className="stat-box">
                                    <span className="label">Pipeline</span>
                                    <strong>86%</strong>
                                </div>
                            </div>
                        </div>

                        <div className="floating-card sales-card">
                            <div className="icon-box">↗</div>
                            <div>
                                <span>Deals closed</span>
                                <strong>1,244</strong>
                            </div>
                        </div>

                        <div className="floating-card activity-card">
                            <div className="avatar-stack">
                                <span>A</span>
                                <span>M</span>
                                <span>S</span>
                            </div>
                            <div>
                                <span>Team sync</span>
                                <strong>Live now</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="logo-strip" aria-label="Trusted by partner brands">
                <div className="container logos">
                    {logos.map((logo) => (
                        <span key={logo}>{logo}</span>
                    ))}
                </div>
            </section>

            <section className="section features">
                <div className="container">
                    <div className="section-heading">
                        <div className="eyebrow">Why leading teams choose Northstar</div>
                        <h2>Everything your team needs to ship faster.</h2>
                    </div>

                    <div className="feature-grid">
                        {featureCards.map((feature) => (
                            <article className="feature-card" key={feature.title}>
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section solutions">
                <div className="container split-layout">
                    <div className="copy-block">
                        <div className="eyebrow">Designed for growth</div>
                        <h2>From campaign planning to customer retention.</h2>
                        <p>
                            Northstar gives teams a shared operating system that keeps strategy visible,
                            execution coordinated, and progress measurable from kickoff to close.
                        </p>

                        <ul className="check-list">
                            <li>AI-generated summaries and weekly reports</li>
                            <li>Custom dashboards for every function</li>
                            <li>Rules-based alerts and task orchestration</li>
                        </ul>
                    </div>

                    <div className="stack-panel">
                        <div className="panel-card card-one">
                            <span className="small-label">Campaign health</span>
                            <strong>92%</strong>
                            <div className="progress-line">
                                <span></span>
                            </div>
                        </div>

                        <div className="panel-card card-two">
                            <span className="small-label">Auto-assigned tasks</span>
                            <div className="task-list">
                                <div>
                                    <span className="dot green"></span> Launch content
                                </div>
                                <div>
                                    <span className="dot blue"></span> QA review
                                </div>
                                <div>
                                    <span className="dot violet"></span> Notify sales
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section testimonials">
                <div className="container">
                    <div className="section-heading narrow">
                        <div className="eyebrow">Customer stories</div>
                        <h2>Teams move faster with clarity.</h2>
                    </div>

                    <div className="testimonial-grid">
                        {testimonials.map((person) => (
                            <article className="quote-card" key={person.name}>
                                <p>“{person.quote}”</p>
                                <div className="person">
                                    <div className={`avatar ${person.alt ? 'alt' : ''}`}>{person.initials}</div>
                                    <div>
                                        <strong>{person.name}</strong>
                                        <span>{person.role}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section pricing">
                <div className="container">
                    <div className="section-heading">
                        <div className="eyebrow">Simple pricing</div>
                        <h2>Choose the plan that fits your team.</h2>
                    </div>

                    <div className="pricing-grid">
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
                                    to="/pricing"
                                    className={plan.featured ? 'primary-button full-width' : 'secondary-button full-width'}
                                >
                                    {plan.buttonText}
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;
