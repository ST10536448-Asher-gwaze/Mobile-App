import { NavLink, Outlet } from 'react-router-dom';
import { navItems } from '../data/siteContent';

function Layout() {
    return (
        <div className="page-shell">
            <header className="topbar">
                <div className="container nav">
                    <NavLink to="/" className="brand" aria-label="Northstar home">
                        <span className="brand-mark">N</span>
                        <span className="brand-name">Northstar</span>
                    </NavLink>

                    <nav className="main-nav" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="nav-actions">
                        <NavLink to="/customers" className="link-button">
                            Sign in
                        </NavLink>
                        <NavLink to="/pricing" className="primary-button">
                            Book demo
                        </NavLink>
                    </div>
                </div>
            </header>

            <Outlet />

            <footer className="site-footer">
                <div className="container footer-wrap">
                    <div className="footer-brand">
                        <div className="brand" aria-label="Northstar home">
                            <span className="brand-mark">N</span>
                            <span className="brand-name">Northstar</span>
                        </div>
                        <p>Helping teams turn complex work into measurable momentum.</p>
                    </div>

                    <div className="footer-links">
                        <NavLink to="/features">Features</NavLink>
                        <NavLink to="/solutions">Solutions</NavLink>
                        <NavLink to="/pricing">Pricing</NavLink>
                        <NavLink to="/customers">Customers</NavLink>
                    </div>

                    <div className="footer-meta">
                        <span>© {new Date().getFullYear()} Northstar</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
