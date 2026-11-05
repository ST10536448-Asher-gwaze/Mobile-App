import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import SolutionsPage from './pages/SolutionsPage';
import CustomersPage from './pages/CustomersPage';
import PricingPage from './pages/PricingPage';
import '../styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/features" element={<FeaturesPage />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    <Route path="/customers" element={<CustomersPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
