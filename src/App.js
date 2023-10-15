import React from 'react';
import './App.css';

// Components
import Dashboard from './components/Dashboard';
import ProductDetails from './components/ProductDetails';
import VendorProfile from './components/VendorProfile';
import QRScanner from './components/QRScanner';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>GreenChain</h1>
            </header>
            <main>
                {/* Routes would go here, linking to the respective components */}
                <Dashboard />
                <ProductDetails />
                <VendorProfile />
                <QRScanner />
            </main>
            <footer>
                <p>GreenChain © 2023</p>
            </footer>
        </div>
    );
}

export default App;
