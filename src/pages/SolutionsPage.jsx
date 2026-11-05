import { Link } from 'react-router-dom';
import { solutionPoints } from '../data/siteContent';

function SolutionsPage() {
    return (
        <main className="page-content">
            <section className="section narrow-page">
                <div className="container center-copy">
                    <div className="eyebrow">Solutions</div>
                    <h1>One operating system for growth teams.</h1>
                    <p>
                        Northstar brings your strategy, execution, and reporting together so marketing,
                        sales, and operations can stay aligned without the chaos.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container split-layout">
                    <div className="copy-block">
                        <h2>Keep work visible from idea to impact.</h2>
                        <p>
                            Coordinate initiatives, automate status updates, and give leadership a live signal
                            on what is moving and what needs attention.
                        </p>
                        <ul className="check-list">
                            {solutionPoints.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
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

            <section className="section cta-panel">
                <div className="container simple-cta">
                    <h2>See how Northstar fits your workflow.</h2>
                    <Link to="/customers" className="secondary-button large">
                        See customer stories
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default SolutionsPage;
