import { testimonials } from '../data/siteContent';

function CustomersPage() {
    return (
        <main className="page-content">
            <section className="section narrow-page">
                <div className="container center-copy">
                    <div className="eyebrow">Customers</div>
                    <h1>Teams move faster with clarity.</h1>
                    <p>
                        Leading brands use Northstar to create stronger operating rhythms, improve visibility,
                        and deliver measurable business outcomes.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container testimonial-grid">
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
            </section>
        </main>
    );
}

export default CustomersPage;
